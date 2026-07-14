import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'كل الحقول مطلوبة' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, error: 'كلمة المرور لازم تكون 6 أحرف على الأقل' });
    }

    // جيب بيانات المستخدمين الحاليين من الشيت
    const checkRes = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'check_user', email })
    });
    const checkData = await checkRes.json();

    if (checkData.exists) {
      return res.status(409).json({ success: false, error: 'الإيميل ده مسجل قبل كده' });
    }

    // تشفير الباسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // تسجيل المستخدم الجديد في الشيت
    const registerRes = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'register_user',
        name,
        email,
        password: hashedPassword
      })
    });
    const registerData = await registerRes.json();

    if (!registerData.success) {
      return res.status(500).json({ success: false, error: 'فيه مشكلة في التسجيل، حاول تاني' });
    }

    return res.status(200).json({ success: true, message: 'تم التسجيل بنجاح' });

  } catch (error) {
    console.error('Register Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

