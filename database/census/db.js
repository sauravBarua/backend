const mongoose = require("mongoose");
import cities from "data.js";

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
    id: Number,
    department: Number,
    city: String,
    population: Number

});

const cityModel = mongoose.model("cities", carSchema);

cityModel.create(cities);