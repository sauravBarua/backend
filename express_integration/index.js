const express = require('express');
const exphbs = require("express-handlebars");
const app = express();


app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/post", (req, res) => {
    res.render("post");
});

app.get("/recipe", (req, res) => {
    res.render("recipe");
});

app.get("/team-member", (req, res) => {
    res.render("team-member");
});

app.get("/team", (req, res) => {
    res.render("team");
});



app.listen(8000, () => {
    console.log("Server running.........");
});