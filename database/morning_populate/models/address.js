const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    country: String
});

const addressModel = mongoose.model('address', addressSchema);

module.exports = addressModel;