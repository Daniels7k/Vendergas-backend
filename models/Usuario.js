const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Usuario = new Schema ({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 6, maxlength: 200 },
    CreatedAt: {type: Date, default: Date.now}
})

mongoose.model("usuarios", Usuario)