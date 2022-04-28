const express = require("express");
var router = express.Router();

const product = require("../../modules/ProductModule")

router.get("/getproducts", product.getProducts);

module.exports = router;