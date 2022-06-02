const express = require("express")
const router = express.Router()
const clienteController = require("../controllers/clienteController")

router.post("/:empresaID/index", clienteController.index)
router.post("/:empresaID/create", clienteController.create)
router.put("/:clienteID/update", clienteController.update)
router.delete("/:clienteID/delete", clienteController.delete)


module.exports = router