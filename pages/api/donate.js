import axios from 'axios';

export default async function handler(req, res) {
  const { quantity, username, email, payment_method } = req.body;
  const return_url = 'https://web.mc.chroma-gaming.xyz/';
  try {
    const result = await axios.post(
      `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/donate`,
      {
        quantity,
        username,
        email,
        payment_method,
        return_url,
      }
    );
    return res.status(200).json(result.data);
  } catch (error) {
    const {
      status,
      data: { message },
    } = error.response;
    if (status === 500) {
      return res.status(status).json({ message: 'Username tidak ditemukan' });
    }

    if (status === 400) {
      return res.status(status).json({
        message: 'Jumlah donasi minimal 10 Chroma Cash',
      });
    }

    return res.status(status).json({ message });
  }
}
