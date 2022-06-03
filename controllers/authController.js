const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {

    const {authorization} = req.headers
    if(!authorization) return res.status(401).send("Acess Denied")

   
    const token =  authorization.replace(/"/g, '')

    try {

        jwt.verify(token, process.env.TOKEN_SECRET)
        next()
    } catch (error) {
       console.log(error)
        res.status(401).send("Acess Denied")
    }
}