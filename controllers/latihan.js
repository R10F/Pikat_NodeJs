let kumpulan_data = [];

exports.getData = (req, res) => {
  if (kumpulan_data.length === 0) {
    res.status(404).json({ message: "Data still empty" });
  } else {
    res.status(200).json({ data: kumpulan_data });
  }
};

exports.addData = (req, res) => {
  let id = kumpulan_data.length + 1;
  let nama = req.body.nama;
  let nim = req.body.nim;
  let kelas = req.body.kelas;
  let alamat = req.body.alamat;

  kumpulan_data.push({ id, nama, nim, kelas, alamat }); //
  res.status(201).json({ message: "Data Created" });
};

exports.editData = (req, res) => {
  res.status(200).json({ message: "Data Edit" });
};

exports.deleteData = (req, res) => {
  let id = Number(req.params.id);
  let filteredData = kumpulan_data.filter((data) => data.id !== id);

  // for (let i = 0; i <= kumpulan_data.length; i++) {
  //   if (kumpulan_data[i]["id"] === id) {
  //     res.status(202).json({ message: `Data With Id ${id} deleted` });
  //     kumpulan_data = filteredData;
  //   }
  // }
  kumpulan_data.forEach((data) => {
    if (id === data.id) {
      res.status(202).json({ message: `Data With Id ${id} deleted` });
      kumpulan_data = filteredData;
    }
  });
  res.status(500).json({ message: `Data with id ${id} not found` });
};
