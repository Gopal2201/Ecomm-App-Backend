const express = require("express");
var router = express.Router();

const Cart = require("../modules/cartModule");

router.put("/update", Cart.updateCartList);
router.get("/get", Cart.getCartList);

module.exports = router;