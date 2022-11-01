const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.send("Olá, FCamara!");
  res.render("home");
})

app.listen(8000, () => {
  console.log("Hospedado na porta 8000 - Acesse: localhost:8000")
})
