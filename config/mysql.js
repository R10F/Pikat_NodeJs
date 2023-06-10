let mysql = require("mysql2");

let db = mysql.createConnection({
  host: "",
  port: "",
  user: "",
  password: "",
  database: "",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connect To MYSQL Database");
});

module.exports = db;
