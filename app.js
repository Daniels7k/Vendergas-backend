const express = require("express")
const app = express()
const usuario = require("./routes/usuario")
const empresa = require("./routes/empresa")
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
app.use("/empresas", empresa)
app.use("/usuarios", usuario)



//Outros
PORT = 4000
app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
} )