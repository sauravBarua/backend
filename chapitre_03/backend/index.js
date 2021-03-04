const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

const students = [];

app.use(bodyParser.json());





app.get("/students", (req, res) => {
    res.send("");
});

app.post("/students/add",(req,res)=>{
    students.push(req.body);
    res.send("Data add");
});


app.listen(8000, () => {
    console.log("Server running.........");
});