const express = require('express');

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send('Hello there, from dynamic app');
})

app.get("/api", (req, res) => {
  res.send('Hitting api endpoint');
})

app.listen(port, () => {
  console.log("Listening on port 3001 . . .");
})