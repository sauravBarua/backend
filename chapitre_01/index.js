const express = require('express');
const app = express();


app.get("/", (req, res) => {
  res.send("Authors API");
})

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

  }
})




app.listen(8000, () => {
  console.log("Server running.........");
});