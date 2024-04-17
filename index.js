const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to my app!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
