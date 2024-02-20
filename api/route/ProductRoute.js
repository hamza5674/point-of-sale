const express = require("express");
const router = express.Router();
const multer=require("multer");
const productCtrl = require("../controllers/ProductController");
const checkAuth =require("../midleware/CheckAuth")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create", [checkAuth, upload.single('image')], productCtrl.createProduct);
router.get("/getall", productCtrl.getall);

module.exports = router;