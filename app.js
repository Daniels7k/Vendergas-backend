const express = require("express")
const app = express()
const usuarios = require("./routes/usuario")
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

app.use("/usuarios", usuarios)



//Outros
PORT = 4000
app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
} )