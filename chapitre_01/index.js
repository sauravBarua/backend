const express = require('express');
const app = express();


app.get("/", (req, res) => {
  res.send("Authors API");
})




app.listen(8000, () => {
    console.log("Server running........." );
  });