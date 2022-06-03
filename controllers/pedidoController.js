const { response } = require("express")
const mongoose = require("mongoose")
require("../models/Pedido")
require("../models/Empresa")
require("../models/Cliente")
const Pedido = mongoose.model("pedidos")



const pedidoController = {

    index: function (req, res) {
        try {
            Pedido.find({ empresaID: req.params.empresaID }).then((empresa) => {
                res.status(200).send(empresa)
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    },

    create: function (req, res) {
        const pedido = new Pedido({
            numeroPedido: Math.floor(Math.random() * 100001),
            cliente: req.body.cliente,
            produto: req.body.produto,
            quantidadeProduto: req.body.quantidadeProduto,
            empresa: req.body.empresa,
            empresaID: req.params.empresaID,
            observacao: req.body.observacao,
            data: req.body.data
        })
        try {
            pedido.save()

            res.status(201).send(pedido)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    },


    delete: function (req, res) {
        try {
            Pedido.findByIdAndDelete({ _id: req.params.pedidoID }).then((pedido) => {
                res.status(200).send(pedido)
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    }
}


module.exports = pedidoController