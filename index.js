const PORT = 5000;
const express = require("express");
const app = express();

const scrapImages = require("./main");

app.use;
app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/scrap", function (req, res) {
  scrapImages(req, res);
});

app.listen(PORT, function () {
  console.log(`App is running on port ${PORT}`);
});
