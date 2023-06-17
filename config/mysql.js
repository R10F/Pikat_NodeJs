let mysql = require("mysql2");

// Pengisian koneksi database disesuaikan berdasarkan XAMPP masing-masing

let db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3308",
  user: "root",
  password: "",
  database: "dbfarrell",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connect To MYSQL Database");
});

module.exports = db;
