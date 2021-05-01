export default function handler(req, res) {
  let data = [
    { id: "alfawpy", name: "Alfamart", fee: "0", additionalFee: "5000" },
    { id: "bank_bca2", name: "Bank BCA", fee: "0", additionalFee: "4000" },
    { id: "bnimb", name: "Gopay", fee: "0.02", additionalFee: "0" },
    { id: "bribank", name: "Visa", fee: "0.029", additionalFee: "2000" },
    { id: "jenius", name: "QRIS", fee: "0.007", additionalFee: "0" },
    // { id: "bank_danamon", name: "Bank Danamon", fee: "0.02", additional_fee: "1000"},
    // { id: "mandirimb", name: "Bank Mandiri", fee: "0.02", additional_fee: "1000"},
    // {
    //   id: "bsmbank",
    //   name: "Bank Mandiri Syariah (Bank BSI)", fee: "0.02", additional_fee: "1000"
    // },
    // { id: "bank_muamalat", name: "Bank Muamalat", fee: "0.02", additional_fee: "1000"},
    // { id: "dana_user", name: "DANA", fee: "0.02", additional_fee: "1000"},
    // { id: "gopay_api", name: "GoPay", fee: "0.02", additional_fee: "1000"},
    // { id: "duitku", name: "Kartu Kredit", fee: "1000", type: "flat" },
    // { id: "ovoid", name: "OVO", fee: "1000", type: "flat" },
    // { id: "qris", name: "QRIS", fee: "0.007", type: "rate" },
  ];

  return res.status(200).json({ data: data });
}
