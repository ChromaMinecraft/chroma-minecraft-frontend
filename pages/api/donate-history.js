export default function handler(req, res) {
  let data = [
    { id: 1, amount: 50, status: "Sukses", waktu: "18/04/2021 05:41" },
    { id: 2, amount: 55, status: "Batal", waktu: "19/04/2021 05:41" },
    { id: 3, amount: 60, status: "Menunggu", waktu: "20/04/2021 05:41" },
    { id: 4, amount: 65, status: "Proses", waktu: "21/04/2021 05:41" },
    { id: 5, amount: 75, status: "Kadaluarsa", waktu: "22/04/2021 05:41" },
  ];

  return res.status(200).json({ data: data });
}
