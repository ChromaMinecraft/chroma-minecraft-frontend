import axios from 'axios';

export default async function handler(req, res) {
  try {
    const result = await axios.get(
      `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/donate/preset`
    );
    return res.status(200).json(result.data);
  } catch (error) {
    const {
      status,
      data: { message },
    } = error.response;
    return res.status(status).json({ message: message });
  }
}
