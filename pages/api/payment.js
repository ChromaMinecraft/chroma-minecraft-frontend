export default function handler(req, res) {
  let data = [
    { id: "alfawpy", name: "Alfamart", fee: "1000" },
    { id: "bank_bca2", name: "Bank BCA", fee: "1000" },
    { id: "bnimb", name: "Bank BNI", fee: "1000" },
    { id: "bribank", name: "Bank BRI", fee: "1000" },
    { id: "jenius", name: "Bank BTPN / Jenius", fee: "1000" },
    { id: "bank_danamon", name: "Bank Danamon", fee: "1000" },
    { id: "mandirimb", name: "Bank Mandiri", fee: "1000" },
    { id: "bsmbank", name: "Bank Mandiri Syariah (Bank BSI)", fee: "1000" },
    { id: "bank_muamalat", name: "Bank Muamalat", fee: "1000" },
    { id: "dana_user", name: "DANA", fee: "1000" },
    { id: "gopay_api", name: "GoPay", fee: "1000" },
    { id: "duitku", name: "Kartu Kredit", fee: "1000" },
    { id: "ovoid", name: "OVO", fee: "1000" },
    { id: "qris", name: "QRIS", fee: "1000" },
  ];

  return res.status(200).json({ data: data });
}
