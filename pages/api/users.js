export default function handler(req, res) {
  let { username } = req.query;
  if (username == "error")
    return res
      .status(400)
      .json({
        message: "Username tidak ditemukan. Pastikan telah login di server.",
      });

  return res.status(200).json({ message: "Username found" });
}
