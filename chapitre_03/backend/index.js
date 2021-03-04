const express = require('express');
const app = express();

const students = [];


app.get("/students", (req, res) => {
    res.send("Welcome");
});

app.post("/students/add",(req,res)=>{
    students.push({
        name: req.body.name,
    });
});


app.listen(8000, () => {
    console.log("Server running.........");
});