require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello World')
})

app.listen(process.env.PORT,()=>{
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT);
})

//El error consiste en que no esta el modulo express por lo tanto el programa no lo encuentra