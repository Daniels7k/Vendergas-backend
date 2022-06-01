const express = require("express")
const router = express.Router()
const empresaController = require("../controllers/empresaController")

router.get("/", (req, res) => {
    res.send("rota empresas")
})
 
router.post("/:userID/index", empresaController.index)
router.post("/:userID/create", empresaController.create)
router.put("/:userID/:empresaID/update", empresaController.put)
router.delete("/:userID/:empresaID/delete", empresaController.delete)


module.exports = router