const express = require('express');
const app = express();

const students = [
    {
        name: "Neo",

    },
    {
        name: "Leo",
    }
];


app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    students.push(req.body);
    res.send("Data add");
});


app.listen(8000, () => {
    console.log("Server running.........");
});