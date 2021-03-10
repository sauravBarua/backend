const mongoose = require("mongoose");
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

const studentSchema = new mongoose.Schema({
    name: String,
    address: {type: mongoose.Types.ObjectId, ref: 'address'}
});

const studentModel = mongoose.model('student', studentSchema);

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    country: String
});

const addressModel = mongoose.model('address', addressSchema);