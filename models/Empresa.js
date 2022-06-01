const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Empresa = new Schema ({
    nomeFantasia: {type: String, required: true},
    razaoSocial: {type: String, required: true},
    cnpj: {type: String, required: true},
    userOwner: {type: String, required: true},
    CreatedAt: {type: Date, default: Date.now}
})

mongoose.model("empresas", Empresa)