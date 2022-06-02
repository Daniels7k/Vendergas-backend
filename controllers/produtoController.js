
const mongoose = require("mongoose")
require("../models/Produto")
const Produto = mongoose.model("produtos")

const produtoController = {

    index: function (req, res) {
        Produto.find({empresaID: req.params.empresaID}).then((produto) => {
            res.status(200).send(produto)
        })
    },

    create: function (req, res) {

        const produto = new Produto({
            nome: req.body.nome,
            descricao: req.body.descricao,
            empresa: req.body.empresa,
            valor: req.body.valor,
            empresaID: req.params.empresaID
        })

        const savedProduto = produto.save()

        res.status(201).send(savedProduto)
    },

    put: function (req, res) {
        Produto.findOne({produtoID: req.params.produtoID}).then((produto) => {
            produto.nome = req.body.nome
            produto.descricao = req.body.descricao
            produto.empresa = req.body.empresa
            produto.valor = req.body.valor

            produto.save()

            res.status(200).send(produto)
        })
    },

    delete: function (req, res) {
        Produto.findByIdAndRemove({_id: req.params.produtoID}).then((response) => {
            res.status(200).send(response)
        })
    }
}


module.exports = produtoController