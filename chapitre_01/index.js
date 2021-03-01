const express = require('express');
const app = express();

//exe-0
app.get("/", (req, res) => {
  res.send("Authors API");
})


//exe-1 et exe-3
app.get("/authors/:id", (req, res) => {
  switch (req.params.id) {
    case "1":
      res.send("Lawrence Nowell, UK")
      break;
    case "2":
      res.send("William Shakespeare, UK")
      break;
    case "3":
      res.send("Charles Dickens, US")
      break;
    case "4":
      res.send("Oscar Wilde, UK")
      break;
    default:
      res.send(`Id ${req.params.id} does not exist`)
  }
})

//exe-2

app.get("/authors/:id/books", (req, res) => {
  switch (req.params.id) {
    case "1":
      res.send("Beowulf")
      break;
    case "2":
      res.send("Hamlet, Othello, Romeo and Juliet, MacBeth")
      break;
    case "3":
      res.send("Oliver Twist, A Christmas Carol")
      break;
    case "4":
      res.send("The Picture of Dorian Gray, The Importance of Being Earnest")
      break;

  }
})


//exe-4

const authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK"
  }
]
app.get("/json/authors/:id", (req, res) => {
  res.send(authors);
})


const books = [
  {
    books: ["Beowulf"]
  }
]
app.get("/json/authors/:id/books", (req, res) => {
  res.send(books);
})



app.listen(8000, () => {
  console.log("Server running.........");
});