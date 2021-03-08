const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/Car",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("db concoct........");
    }
);

const schema = new mongoose.Schema({
    name: 'string',
    model: 'string',
    year: 'string'

});
