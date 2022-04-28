const express = require("express");
var router = express.Router();

const Admin = require("../../modules/AdminModule");
const Product = require("../../modules/ProductModule")

router.get("/getproducts", Product.getProducts);

router.post("/addproduct", Admin.addProduct);
router.delete("/deleteproduct/:id", Admin.deleteProduct)
router.put("/updateproduct/:id", Admin.updateProduct)

module.exports = router;