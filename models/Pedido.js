const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Pedido = new Schema ({
    numeroPedido: {type: String, required: true},
    cliente: {type: String, required: true},
    produto: {type: String, required: true},
    quantidadeProduto: {type: String, required: true},
    empresa: {type: String, required: true},
    empresaID: {type: String, required: true},
    observacao: {type: String, required: true},
    data: {type: String, required: true}
    
})

mongoose.model("pedidos", Pedido)