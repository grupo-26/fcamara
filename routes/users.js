const express = require("express");
const router = express.Router();

router.get("/register", (_, res) => {
  res.render("register");
})

router.post("/register", (req, res) => {
  
})

router.get("/login", (_, res) => {
  res.render("login");
})

router.post("/login", (req, res) => {

})

module.exports = router;
