const express = require("express");
const { forgotPassword, resetPassword } = require("../Controllers/auth.controller");
const router = express.Router();

router.post("https://passwordapp-server.onrender.com/forgot-password", forgotPassword);
router.post("https://passwordapp-server.onrender.com/reset-password/:token", resetPassword);

module.exports = router;
