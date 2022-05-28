const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuarioController")


router.get("/registro", usuarioController.registro )


module.exports = router