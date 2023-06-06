const express = require("express");

const router = express.Router();
const latihanController = require("../controllers/latihan");

router.get("/getData", latihanController.getData);
router.post("/addData", latihanController.addData);
router.put("/editData", latihanController.editData);
router.delete("/deleteData/:id", latihanController.deleteData);

module.exports = router;
