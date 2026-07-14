import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'الإيميل وكلمة المرور مطلوبين' });
    }

    // جيب بيانات المستخدم من الشيت
    const userRes = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'get_user', email })
    });
    const userData = await userRes.json();

    if (!userData.success || !userData.user) {
      return res.status(401).json({ success: false, error: 'الإيميل أو كلمة المرور غلط' });
    }

    // تحقق من الباسورد
    const isValid = await bcrypt.compare(password, userData.user.password);
    if (!isValid) {
      return res.status(401).json({ success: false, error: 'الإيميل أو كلمة المرور غلط' });
    }

    // عمل JWT token صالح لمدة 7 أيام
    const token = jwt.sign(
      { email: userData.user.email, name: userData.user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      token,
      name: userData.user.name,
      email: userData.user.email
    });

  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

