const express = require("express");
const router = express.Router();
const categoryCtrl = require("../controllers/CategoryController");

router.post("/signup",categoryCtrl.categorycreate);
router.post("/login", categoryCtrl.getall);

module.exports = router;