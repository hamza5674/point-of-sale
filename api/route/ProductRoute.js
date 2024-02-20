const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/ProductController");

router.post("/signup",productCtrl.createProduct);
router.post("/login", productCtrl.getall);

module.exports = router;