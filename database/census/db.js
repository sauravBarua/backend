const mongoose = require("mongoose");
const cities = require("./Data/data.js");
mongoose.connect(
    "mongodb://localhost:27017/city",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("db connect............");
    }
);

const citySchema = new mongoose.Schema({
    _id: Number,
    department: Number,
    city: String,
    population: Number

});

const cityModel = mongoose.model("cities", citySchema);

cityModel.create(cities);