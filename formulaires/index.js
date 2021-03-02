const express = require('express');
const expressHandlebars = require("express-handlebars");
const app = express();


app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.get("/login", (req, res) => {
    res.render("login");
});


app.use(express.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
    console.log(req.body);
});

app.listen(8000, () => {
    console.log("Server running.........");
});