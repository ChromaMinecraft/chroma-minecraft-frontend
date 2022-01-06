import axios from 'axios';

export default async function handler(req, res) {
  const { quantity, username, email, payment_method, captchaCode } = req.body;
  const return_url = process.env.BASE_URL;
  if (req.method != 'POST') {
    return res.status(404).json({ message: 'Not found' });
  }
  try {
    if (!username || !email) {
      return res.status(400).json({ message: 'Sistem mendeteksi username atau email kosong, silahkan muat halaman ini kembali.' });
    }

    const resultCaptcha = await axios({
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaCode}`,
      method: 'POST',
      data: {
        captchaCode,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });
    if (!resultCaptcha.data.success) {
      return res.status(422).json({
        message: 'Kode captcha salah. Silahkan coba lagi',
      });
    }
    const result = await axios({
      url: `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/donate`,
      method: 'POST',
      data: {
        quantity,
        username,
        email,
        payment_method,
        return_url,
      },
      headers: {
        'Accept-Language': 'id',
      },
    });
    return res.status(200).json(result.data);
  } catch (error) {
    if (!error.response) return res.status(500).json({ message: 'Internal server error' });

    const {
      status,
      data: { message },
    } = error.response;
    return res.status(status).json({ message });
  }
}
