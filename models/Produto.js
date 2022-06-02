const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Produto = new Schema ({
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    empresa: {type: String, required: true},
    valor: {type: String, required: true},
    empresaID: {type: String, required: true}
    
})

mongoose.model("produtos", Produto)