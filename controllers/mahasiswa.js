let db = require("../config/mysql");

exports.getData = (req, res) => {
  let sql = `SELECT * FROM tbl_mahasiswa`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ message: "Data Fetched", val: result });
  });
};

exports.addData = (req, res) => {
  let sql = `INSERT INTO tbl_mahasiswa (nim,nama,kelas,jurusan,alamat) VALUES 
  (
    '${req.body.nim}', 
    '${req.body.nama}', 
    '${req.body.kelas}', 
    '${req.body.jurusan}', 
    '${req.body.alamat}'
    )`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: "Data Created", val: result });
  });
};
