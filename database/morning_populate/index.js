const mongoose = require("mongoose");
const studentModel = require("./models/students")
const addressModel = require("./models/address")

mongoose.connect(
    "mongodb://localhost:27017/mongoose_populate",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("db connect............");
    }
);







