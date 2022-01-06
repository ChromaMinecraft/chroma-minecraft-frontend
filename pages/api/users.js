import axios from 'axios';

export default async function handler(req, res) {
  let { username } = req.query;
  try {
    const result = await axios({
      url: `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/user/${username}`,
      method: 'GET',
      headers: {
        'Accept-Language': 'id',
      },
    });
    const { message } = result.data;
    if (result.status === 200) {
      return res.status(200).json({ message });
    }
    return res.status(203).json({ message: 'Username tidak ditemukan' });
  } catch (error) {
    if (!error.response) return res.status(500).json({ message: 'Internal server error' });

    const {
      status,
      data: { message },
    } = error.response;
    return res.status(status).json({ message });
  }
}
