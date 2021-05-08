import axios from 'axios';

export default async function handler(req, res) {
  const { username, page, sort_by, order_by } = req.query;
  try {
    const result = await axios.get(
      `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/donate/history?username=${username}&page=${page}&sort_by=${sort_by}&order_by=${order_by}`
    );
    return res.status(200).json(result.data);
  } catch (error) {
    const {
      status,
      data: { message },
    } = error.response;

    return res.status(status).json({ message });
  }
}
