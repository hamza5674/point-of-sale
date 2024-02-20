const express = require("express");
const router = express.Router();
const saleCtrl = require("../controllers/SalesController");

router.post("/signup",saleCtrl.salecreate);
router.post("/login",saleCtrl.getall);

module.exports = router;