const express = require("express")
const app = express()
const usuarios = require("./routes/usuario")
require("dotenv").config()
const mongoose = require("mongoose")

//mongoose
mongoose.connect(process.env.MONGOOSE_URL, (error) => {
    if(error){
        return console.log(error)
    }
    console.log("Mongo Connected")
})


app.get("/", (req, res) => {
    res.send("Rota principal")
})

app.use("/usuarios", usuarios)

PORT = 4000
app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
} )