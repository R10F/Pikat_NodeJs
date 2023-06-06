const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const latihanRoutes = require("./router/latihan");

const app = express();

app.use(express.json(), cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/latihan", latihanRoutes);

module.exports = app;
