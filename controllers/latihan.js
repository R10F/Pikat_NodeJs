let kumpulan_data = [];

exports.getData = (req, res) => {
  res.status(200).json({ data: kumpulan_data });
};

exports.addData = (req, res) => {
  let id = req.body.id;
  let nama = req.body.nama;
  kumpulan_data.push({ id, nama });
  res.status(201).json({ message: "Data Created" });
};

exports.editData = (req, res) => {
  res.status(200).json({ message: "Data Edit" });
};

exports.deleteData = (req, res) => {
  let id = Number(req.params.id);
  let filteredData = kumpulan_data.filter((data) => data.id !== id);

  kumpulan_data = filteredData;

  res.status(202).send({ message: "Data Deleted" });
};
