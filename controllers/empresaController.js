
const mongoose = require("mongoose")
require("../models/Empresa")
const Empresa = mongoose.model("empresas")

const empresaController = {

    index: function (req, res) {
        try {
            Empresa.find({ userOwner: req.params.userID }).then((empresa) => {
                res.status(200).send(empresa)
            })

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }

    },

    create: function (req, res) {

        try {
            const empresa = new Empresa({
                nomeFantasia: req.body.nomeFantasia,
                razaoSocial: req.body.razaoSocial,
                cnpj: req.body.cnpj,
                userOwner: req.params.userID
            })
            
            const savedEmpresa = empresa.save()

            res.status(201).send(savedEmpresa)

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }



    },

    put: (req, res) => {

        Empresa.findOne ({_id: req.params.empresaID}).then((empresa) => {
  
            empresa.nomeFantasia = req.body.nomeFantasia
            empresa.razaoSocial = req.body.razaoSocial
            empresa.cnpj = req.body.cnpj

            empresa.save()
            res.status(200).send(empresa)
        })
    },


    delete: (req, res) => {
        Empresa.findByIdAndDelete({_id: req.params.empresaID}).then((empresa) => {
            res.status(200).send(empresa)
        })
    }
}

module.exports = empresaController