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
    body('password').custom((value) => {
        var schema = new passwordValidator();
        schema
          .is().min(8) 
          .is().max(100) 
          .has().uppercase() 
          .has().lowercase() 
          .has().digits(2) 
          .has().not().spaces() 
          .is().not().oneOf(["Passw0rd", "Password123"]);
        return schema.validate(value);
      }),
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