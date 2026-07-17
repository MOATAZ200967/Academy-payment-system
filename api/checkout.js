export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const { amount, package_name, customer_name: name, customer_email: email, customer_phone: phone } = req.body;
    const amountInCents = amount * 100;

    const authResponse = await fetch('https://accept.paymob.com/api/auth/tokens', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: process.env.PAYMOB_API_KEY })
    });
    const authData = await authResponse.json();
    const authToken = authData.token;

    const orderResponse = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_token: authToken,
        delivery_needed: "false",
        amount_cents: amountInCents.toString(),
        currency: "EGP",
        items: [{ name: package_name || "باقة تدريبية", amount_cents: amountInCents.toString(), quantity: "1" }]
      })
    });
    const orderData = await orderResponse.json();
    const orderId = orderData.id;

    const keyResponse = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_token: authToken,
        amount_cents: amountInCents.toString(),
        expiration: 3600,
        order_id: orderId,
        billing_data: { 
          apartment: "NA", email: email, floor: "NA", first_name: name, 
          street: "NA", building: "NA", phone_number: phone, 
          shipping_method: "NA", postal_code: "NA", city: "NA", 
          country: "EG", last_name: "NA" 
        },
        currency: "EGP",
        integration_id: Number(process.env.PAYMOB_INTEGRATION_ID),
        lock_order_to_token: true
      })
    });
    const keyData = await keyResponse.json();

    return res.status(200).json({ 
      success: true, 
      payment_url: `https://accept.paymob.com/api/acceptance/iframes/${process.env.PAYMOB_IFRAME_ID}?payment_token=${keyData.token}` 
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
