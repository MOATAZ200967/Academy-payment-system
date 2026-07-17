import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'غير مصرح' });
    }

    if (!process.env.JWT_SECRET || !process.env.GOOGLE_SCRIPT_URL || !process.env.GOOGLE_SCRIPT_SECRET) {
      return res.status(500).json({ success: false, error: 'إعدادات السيرفر غير مكتملة' });
    }

    const token = authHeader.split(' ')[1];
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.status(401).json({ success: false, error: 'الجلسة انتهت، سجل دخولك تاني' });
    }

    const subRes = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'get_subscription',
        email: decoded.email,
        secret: process.env.GOOGLE_SCRIPT_SECRET
      })
    });

    if (!subRes.ok) {
      return res.status(500).json({ success: false, error: 'تعذر جلب بيانات الاشتراك' });
    }

    const subData = await subRes.json();

    return res.status(200).json({
      success: true,
      name: decoded.name,
      email: decoded.email,
      subscription: subData?.subscription || null
    });
  } catch (error) {
    console.error('Dashboard Error:', error);
    return res.status(500).json({ success: false, error: 'حدث خطأ في الداشبورد' });
  }
}
