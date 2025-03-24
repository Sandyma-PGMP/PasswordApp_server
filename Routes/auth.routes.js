const express = require("express");
const { forgotPassword, resetPassword,createUser } = require("../Controllers/auth.controller");
const router = express.Router();


router.post("/create-user", createUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
