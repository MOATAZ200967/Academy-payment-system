export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

    try {
        const data = req.body.obj || {};
        const order = data.order || {};
        
        // 🔥 هنا السر: بندور على البيانات في كل المسارات اللي باي موب بتستخدمها
        const claims = data.payment_key_claims || {};
        const customerInfo = data.billing_data || order.billing_data || claims.billing_data || order.shipping_data || {};

        // تجميع الاسم (الأول والأخير)
        const fName = customerInfo.first_name || "";
        const lName = customerInfo.last_name || "";
        const name = (fName || lName) ? `${fName} ${lName}`.trim() : "غير معروف";
        
        // استخراج التليفون والإيميل (مع البحث في مصدر الدفع لو كانت محفظة)
        const phone = customerInfo.phone_number || data.source_data?.phone_number || "غير متاح";
        const email = customerInfo.email || "غير متاح";

        // طباعة الداتا عشان لو حبيت تراجعها في الـ logs
        console.log("PAYMOB PAYLOAD CHECK:", { name, phone, email });

        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Origin": "http://localhost" },
            body: JSON.stringify({
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                template_params: {
                    status: data.success === true ? "نجاح ✅" : "فشل ❌",
                    amount: (data.amount_cents / 100) || 0,
                    order_id: order.id || data.id || "غير معروف",
                    customer_name: name,
                    customer_phone: phone,
                    customer_email: email
                }
            })
        });

        return res.status(200).json({ status: 'ok' });
    } catch (error) {
        console.error("Webhook Error:", error);
        return res.status(500).json({ status: 'error' });
    }
}
