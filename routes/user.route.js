const express = require("express");
const router = express.Router();

router.get("/login", (_, res) => {
  res.render("login");
})

router.get("/register", (_, res) => {
  res.render("register");
})


module.exports = router;
