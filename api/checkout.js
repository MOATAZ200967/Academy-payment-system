export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const {
      amount,
      package_name,
      customer_name: name,
      customer_email: email,
      customer_phone: phone
    } = req.body || {};

    const amountNumber = Number(amount);
    if (!amountNumber || amountNumber <= 0) {
      return res.status(400).json({ success: false, message: 'المبلغ غير صالح' });
    }

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'الاسم والإيميل والهاتف مطلوبين' });
    }

    if (
      !process.env.PAYMOB_API_KEY ||
      !process.env.PAYMOB_INTEGRATION_ID ||
      !process.env.PAYMOB_IFRAME_ID
    ) {
      return res.status(500).json({ success: false, message: 'إعدادات Paymob غير مكتملة' });
    }

    const amountInCents = Math.round(amountNumber * 100);

    const authResponse = await fetch('https://accept.paymob.com/api/auth/tokens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: process.env.PAYMOB_API_KEY })
    });

    if (!authResponse.ok) {
      return res.status(500).json({ success: false, message: 'فشل إنشاء auth token' });
    }

    const authData = await authResponse.json();
    if (!authData?.token) {
      return res.status(500).json({ success: false, message: 'لم يتم استلام auth token' });
    }

    const orderResponse = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_token: authData.token,
        delivery_needed: false,
        amount_cents: amountInCents.toString(),
        currency: 'EGP',
        items: [
          {
            name: package_name || 'باقة تدريبية',
            amount_cents: amountInCents.toString(),
            quantity: '1'
          }
        ]
      })
    });

    if (!orderResponse.ok) {
      return res.status(500).json({ success: false, message: 'فشل إنشاء الطلب' });
    }

    const orderData = await orderResponse.json();
    if (!orderData?.id) {
      return res.status(500).json({ success: false, message: 'لم يتم استلام رقم الطلب' });
    }

    const keyResponse = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_token: authData.token,
        amount_cents: amountInCents.toString(),
        expiration: 3600,
        order_id: orderData.id,
        billing_data: {
          apartment: 'NA',
          email,
          floor: 'NA',
          first_name: name,
          street: 'NA',
          building: 'NA',
          phone_number: phone,
          shipping_method: 'NA',
          postal_code: 'NA',
          city: 'NA',
          country: 'EG',
          last_name: 'NA'
        },
        currency: 'EGP',
        integration_id: Number(process.env.PAYMOB_INTEGRATION_ID),
        lock_order_to_token: true
      })
    });

    if (!keyResponse.ok) {
      return res.status(500).json({ success: false, message: 'فشل إنشاء payment key' });
    }

    const keyData = await keyResponse.json();
    if (!keyData?.token) {
      return res.status(500).json({ success: false, message: 'لم يتم استلام payment token' });
    }

    return res.status(200).json({
      success: true,
      payment_url: `https://accept.paymob.com/api/acceptance/iframes/${process.env.PAYMOB_IFRAME_ID}?payment_token=${keyData.token}`
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'حدث خطأ في عملية الدفع' });
  }
}
