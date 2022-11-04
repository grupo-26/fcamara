const express = require("express");
const router = express.Router();

// Rota para página das trilhas
router.get("/", (req, res) => {
  res.render("courses") 
})

// Class = aula, não confundir com classes(POO)
router.get("/:courseName/:classId", () => {
  res.send("Página de Curso TAL, Aula TAL")
})


