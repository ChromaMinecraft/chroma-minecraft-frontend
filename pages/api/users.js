import axios from 'axios';

export default async function handler(req, res) {
  let { username } = req.query;
  try {
    const result = await axios.get(
      `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/user/${username}`
    );
    if (result.status === 200) {
      return res.status(200).json({ message: 'Username ditemukan' });
    }
    return res.status(203).json({ message: 'Username tidak ditemukan' });
  } catch (error) {
    console.log(error);
    const {
      status,
      data: { message },
    } = error.response;
    return res.status(status).json({ messsage: message });
  }
}
