module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/create", users.create);

  router.get("/login", (_, res) => {
    res.render("login");
  })

  app.use("/user", router);
}
