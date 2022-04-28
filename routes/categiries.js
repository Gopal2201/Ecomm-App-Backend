const express = require("express");
var router = express.Router();

const mobile = require("../modules/mobileList");
const laptop = require("../modules/laptopModule")

router.get("/mobiles", mobile.getMobiles);
router.post("/mobiles", mobile.addMobiles);

router.get("/laptops", laptop.getLaptops);
router.post("/laptops", laptop.addLaptops);

module.exports = router;