const express = require("express");

const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswa");

router.get("/getData", mahasiswaController.getData);
router.post("/addData", mahasiswaController.addData);

module.exports = router;
