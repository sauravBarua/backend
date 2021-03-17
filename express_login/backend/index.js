const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const userModel = require("./models/user");


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/login', 
{useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("db concoct........");
});

app.get('/',(req, res)=>{
    res.send('Hello World')
});
app.listen(port);