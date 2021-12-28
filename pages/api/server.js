import axios from 'axios';

export default async function handler(req, res) {
  try {
    const result = await axios({
      url: `https://minecraft-mp.com/api/?object=servers&element=detail&key=${process.env.MINECRAFT_MP_SERVER_KEY}`,
      method: 'GET',
    });
    return res.status(200).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
