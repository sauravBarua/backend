const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/express_login', 
{useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("db concoct........");
});

app.listen(port)