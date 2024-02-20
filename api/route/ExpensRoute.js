const express = require("express");
const router = express.Router();
const expensCtrl = require("../controllers/ExpensController");

router.post("/signup",expensCtrl.expenscreate);
router.post("/login", expensCtrl.getall);

module.exports = router;