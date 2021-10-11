const express = require("express")
const router = express.Router()
const Login = require("../Controllers/login")

router.post("/Login",Login.Login)
router.put('/ChangePassword',Login.ChangePassword)

module.exports = router