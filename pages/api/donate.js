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
    console.log(result.data);
    return res.status(200).json(result.data);
  } catch (error) {
    const {
      status,
      data: { message },
    } = error.response;
    console.log(message);
    return res.status(status).json({ messsage: message });
  }
  if (username == 'error')
    return res.status(400).json({ message: 'Unknown username' });

  return res
    .status(200)
    .json({ message: 'This should redirect to payment gateway' });
}
