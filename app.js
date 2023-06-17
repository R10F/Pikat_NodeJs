const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mahasiswaRoutes = require("./router/mahasiswa");
const app = express();

app.use(express.json(), cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/mahasiswa", mahasiswaRoutes);

module.exports = app;
