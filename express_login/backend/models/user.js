const { Schema } = require("mongoose")

const mongoose = require('mongoose');

const userSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    password: String
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;