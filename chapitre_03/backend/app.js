const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const students = [];

app.use(bodyParser.json());
app.use(cors());


app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    students.push(req.body);
    res.json(students);
});


app.listen(8000, () => {
    console.log("Server running.........");
});