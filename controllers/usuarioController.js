const mongoose = require("mongoose")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const usuarioController = {

    registro: async function (req, res) {

        try {
            //Verificando preexistencia no BD
            const emailUser = await Usuario.findOne({ email: req.body.email })
            if (emailUser) return res.status(400).send({ errors: "Este email já esta cadastrado!" })

            //Criando usuário
            const user = new Usuario({
                nome: req.body.nome,
                email: req.body.email,
                senha: bcrypt.hashSync(req.body.senha)
            })

            const saveduser = await user.save()
            res.status(201).send(saveduser)

        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    },


    login: async function (req, res) {

        try {
            //Verificando preexistencia no BD
            const selectedUser = await Usuario.findOne({ email: req.body.email })
            if (!selectedUser) return res.status(400).send({ errors: "email ou senha incorretos!" })

            //Verificando Hash
            const passwordAndUserMatch = bcrypt.compareSync(req.body.senha, selectedUser.senha)
            if (!passwordAndUserMatch) return res.status(400).send({ errors: "email ou senha incorretos!" })

            // Criando Token
            const token = jwt.sign({ id: selectedUser.id, nome: selectedUser.nome }, process.env.TOKEN_SECRET)

            res.status(200).send({ token: token, id: selectedUser.id, nome: selectedUser.nome })

        } catch (error) {
            res.status(500).send(error)
        }

    }
}


module.exports = usuarioController