const Usuario = require("../models/Usuario")
const bcrypt = require("bcryptjs")

const usuarioController = {
    
    registro: async function (req, res) {

        try {
            const user = new Usuario({
                nome: req.body.nome,
                email: req.body.email,
                senha: bcrypt.hashSync(req.body.senha)
            })

            const saveduser = await user.save()
            res.status(201).send(saveduser)
            
        } catch (error) {
            res.status(400).send(error)
        }
    }
}


module.exports = usuarioController