const mongoose = require("mongoose")
require("../models/Cliente")
const Cliente = mongoose.model("clientes")

const clienteController = {

    index: function (req, res) {
        try {
            Cliente.find({ empresaID: req.params.empresaID }).then((cliente) => {
                res.status(200).send(cliente)
            })

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },

    create: function (req, res) {

        const cliente = new Cliente({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            empresa: req.body.empresa,
            empresaID: req.params.empresaID
        })

        try {
            cliente.save().then((savedCliente) => {
                console.log(savedCliente)
                res.status(201).send(savedCliente)
            })


        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },

    update: function (req, res) {
        try {
            Cliente.findOne({ _id: req.params.clienteID }).then((cliente) => {
                cliente.nome = req.body.nome
                cliente.email = req.body.email
                cliente.telefone = req.body.telefone
                cliente.empresa = req.body.empresa

                cliente.save()

                res.status(200).send(cliente)
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    },

    delete: function (req, res) {
        try {
            Cliente.findByIdAndDelete({ _id: req.params.clienteID }).then((cliente) => {
                res.status(200).send(cliente)
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    }
}

module.exports = clienteController