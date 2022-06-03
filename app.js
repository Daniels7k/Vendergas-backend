const express = require("express")
const app = express()
const usuario = require("./routes/usuario")
const empresa = require("./routes/empresa")
const cliente = require("./routes/cliente")
const produto = require("./routes/produto")
const pedido = require("./routes/pedidos")
const authController = require("./controllers/authController")

require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())

//mongoose
mongoose.connect(process.env.MONGOOSE_URL, (error) => {
    if(error){
        return console.log(error)
    }
    console.log("Mongo Connected")
})


app.use(express.urlencoded({
    extended: true
}));
app.use( express.json() )


//Rotas

app.get("/", (req, res) => {
    res.send("Rota principal")
})

//Privadas

app.use("/empresas", authController, empresa)
app.use("/clientes", authController, cliente)
app.use("/produtos", authController, produto)
app.use("/pedidos/", authController, pedido)

//Free

app.use("/usuarios", usuario)


//Outros
PORT = 4000 || process.env.PORT
app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
} )