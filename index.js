const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá, FCamara!");
})

app.listen(8000, () => {
  console.log("Hospedado na porta 8000 - Acesse: localhost:8000")
})
