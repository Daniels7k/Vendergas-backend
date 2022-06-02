const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Cliente = new Schema ({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    empresa: {type: String, required: true},
    empresaID: {type: String, required: true}
})

mongoose.model("clientes", Cliente)