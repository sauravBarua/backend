const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const userModel = require("./models/user");
const { body, validationResult } = require('express-validator');
const passwordValidator = require('password-validator');



app.use(express.json());


mongoose.connect('mongodb://localhost:27017/login',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("db connect........");
    });

app.get('/', (req, res) => {
    res.json('Hello World')
});

app.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
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