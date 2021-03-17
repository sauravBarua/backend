const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const userModel = require("./models/user");
const expressValidator = require("express-validator");



app.use(express.json());


mongoose.connect('mongodb://localhost:27017/login', 
{useNewUrlParser: true, useUnifiedTopology: true },
()=>{
    console.log("db connect........");
});

app.get('/',(req, res)=>{
    res.json('Hello World')
});

app.post('/login', async (req, res) => {
    const user = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const saveUser = await user.save()
        res.json(saveUser)

    } catch (err) {
        res.json({ message: err })
    }
})
app.listen(port);