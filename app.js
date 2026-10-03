const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("app is listeting at port 3000");
});
