const express = require("express")
const router = express.Router()
const produtoController = require("../controllers/produtoController")


router.post("/:empresaID/index", produtoController.index)
router.post("/:empresaID/create", produtoController.create)
router.put("/:produtoID/update", produtoController.put)
router.delete("/:produtoID/delete", produtoController.delete)


module.exports = router