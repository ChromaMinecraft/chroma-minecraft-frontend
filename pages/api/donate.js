export default function handler(req, res) {
  let { username } = req.body;
  if (username == "error")
    return res.status(400).json({ message: "Unknown username" });

  return res
    .status(200)
    .json({ message: "This should redirect to payment gateway" });
}
