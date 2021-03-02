const express = require('express');
const expressHandlebars = require("express-handlebars");
const app = express();


app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/login", (req, res) => {
    res.render("login");
});


app.listen(8000, () => {
    console.log("Server running.........");
});