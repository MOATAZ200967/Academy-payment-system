import crypto from 'crypto';

function timingSafeEqualHex(a, b) {
  try {
    const ba = Buffer.from(a, 'hex');
    const bb = Buffer.from(b, 'hex');
    if (ba.length !== bb.length) return false;
    return crypto.timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}

function isValidHmac(obj, receivedHmac) {
  if (!receivedHmac || !obj) return false;

  const fields = [
    obj.amount_cents,
    obj.created_at,
    obj.currency,
    obj.error_occured,
    obj.has_parent_transaction,
    obj.id,
    obj.integration_id,
    obj.is_3d_secure,
    obj.is_auth,
    obj.is_capture,
    obj.is_refunded,
    obj.is_standalone_payment,
    obj.is_voided,
    obj.order?.id,
    obj.owner,
    obj.pending,
    obj.source_data?.pan,
    obj.source_data?.sub_type,
    obj.source_data?.type,
    obj.success
  ];

  const str = fields.map(v => String(v ?? '')).join('');
  const calc = crypto
    .createHmac('sha512', process.env.PAYMOB_HMAC_SECRET || '')
    .update(str)
    .digest('hex');

  return timingSafeEqualHex(calc, receivedHmac);
}

async function sendBrevoEmail({ to, toName, subject, html }) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sender: { email: process.env.SENDER_EMAIL, name: 'English Academy' },
      to: [{ email: to, name: toName }],
      subject,
      htmlContent: html
    })
  });

  return res.ok;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'method_not_allowed' });
  }

  try {
    const { obj: data, type } = req.body || {};
    const receivedHmac = req.query.hmac;

    if (type === 'TRANSACTION' && !isValidHmac(data, receivedHmac)) {
      return res.status(401).json({ error: 'Invalid signature' });
    }

    if (type === 'TRANSACTION' && data?.success === true) {
      const order = data.order || {};
      const claims = data.payment_key_claims || {};
      const billing = data.billing_data || order.billing_data || claims.billing_data || {};

      const fName = billing.first_name || '';
      const lName = billing.last_name || '';
      const name = (fName || lName) ? `${fName} ${lName}`.trim() : 'العميل';
      const email = billing.email && billing.email !== 'NA' ? billing.email : null;
      const phone = billing.phone_number && billing.phone_number !== 'NA' ? billing.phone_number : 'غير متاح';
      const amount = Number(data.amount_cents || 0) / 100;
      const orderId = order.merchant_order_id || order.id || data.id || 'غير معروف';
      const packageName = order.items?.[0]?.name || 'باقة تدريبية';

      if (orderId && globalThis.processedPaymobOrders?.has(orderId)) {
        return res.status(200).json({ status: 'duplicate_ignored' });
      }

      globalThis.processedPaymobOrders = globalThis.processedPaymobOrders || new Set();
      globalThis.processedPaymobOrders.add(orderId);

      if (email && process.env.GOOGLE_SCRIPT_URL && process.env.GOOGLE_SCRIPT_SECRET) {
        try {
          await fetch(process.env.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'save_subscription',
              email,
              name,
              package_name: packageName,
              amount,
              order_id: orderId,
              secret: process.env.GOOGLE_SCRIPT_SECRET
            })
          });
        } catch (sheetError) {
          console.error('Sheet Save Error:', sheetError);
        }
      }

      const tableHtml = `
        <table dir="rtl" style="width:100%;border-collapse:collapse;font-family:Arial;">
          <tr style="background:#0d9488;color:#fff;">
            <th colspan="2" style="padding:12px;text-align:center;">تفاصيل الاشتراك</th>
          </tr>
          <tr><td style="padding:10px;border:1px solid #ddd;width:35%;font-weight:bold;">الاسم:</td><td style="padding:10px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;">الباقة:</td><td style="padding:10px;border:1px solid #ddd;color:#0d9488;font-weight:bold;">${packageName}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;">الهاتف:</td><td style="padding:10px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;">رقم الطلب:</td><td style="padding:10px;border:1px solid #ddd;font-size:12px;">${orderId}</td></tr>
          <tr style="background:#f0fdfa;"><td style="padding:10px;border:1px solid #ddd;font-weight:bold;">المبلغ:</td><td style="padding:10px;border:1px solid #ddd;font-weight:bold;color:#0d9488;">${amount} ج.م</td></tr>
        </table>`;

      if (process.env.SENDER_EMAIL && process.env.BREVO_API_KEY) {
        await sendBrevoEmail({
          to: process.env.SENDER_EMAIL,
          toName: 'Admin',
          subject: `✅ اشتراك جديد: ${packageName} - ${name}`,
          html: `<h3 dir="rtl">لديك اشتراك جديد:</h3>${tableHtml}`
        });

        if (email) {
          await sendBrevoEmail({
            to: email,
            toName: name,
            subject: `🎉 تم تأكيد اشتراكك في English Academy`,
            html: `
              <div dir="rtl" style="font-family:Arial;max-width:500px;margin:auto;">
                <h2 style="color:#0d9488;">شكراً لك ${name}! 🎉</h2>
                <p>تم تأكيد اشتراكك بنجاح. إليك تفاصيل طلبك:</p>
                ${tableHtml}
                <p style="margin-top:20px;color:#666;">سيتواصل معك فريقنا قريباً لتحديد مواعيد الجلسات.</p>
                <p style="color:#0d9488;font-weight:bold;">English Academy Team 🌟</p>
              </div>`
          });
        }
      }

      return res.status(200).json({ status: 'ok' });
    }

    if (type === 'TRANSACTION' && data?.success === false) {
      return res.status(200).json({ status: 'payment_failed' });
    }

    return res.status(200).json({ status: 'ignored' });
  } catch (error) {
    console.error('Webhook Error:', error);
    return res.status(500).json({ status: 'error', message: 'حدث خطأ في الويب هوك' });
  }
}
