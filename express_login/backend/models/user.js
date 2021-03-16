const { Schema } = require("mongoose")

const mongooes = require(mongooes)

const userSchema = new Schema({
    firstName: String,
    surname: String,
    email: String,
    password: String,
    confirm_password: String,
    date_of_birth: Number

})

const userModel = mongooes.model('user, userSchema ')