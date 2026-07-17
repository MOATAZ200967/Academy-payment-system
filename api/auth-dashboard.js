import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // تحقق من الـ token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'غير مصرح' });
    }

    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.status(401).json({ success: false, error: 'الجلسة انتهت، سجل دخولك تاني' });
    }

    // جيب بيانات الاشتراك من الشيت
    const subRes = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'get_subscription', email: decoded.email, secret: process.env.GOOGLE_SCRIPT_SECRET })
    });
    const subData = await subRes.json();

    return res.status(200).json({
      success: true,
      name: decoded.name,
      email: decoded.email,
      subscription: subData.subscription || null
    });

  } catch (error) {
    console.error('Dashboard Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
