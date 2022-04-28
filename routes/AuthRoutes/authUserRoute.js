const express = require("express");
var router = express.Router();

const user = require("../../modules/userAuthModule");

router.post("/create", user.CreateUser);
router.post("/login", user.UserLogin);

module.exports = router;