const express = require("express")
const router = express.Router()
const pedidoController = require("../controllers/pedidoController")

router.post("/:empresaID/index", pedidoController.index)
router.post("/:empresaID/create", pedidoController.create)

router.delete("/:pedidoID/delete", pedidoController.delete)



module.exports = router