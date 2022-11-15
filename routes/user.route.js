module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const cors = require("cors");

  var router = require("express").Router();

  router.post("/", cors(), users.register);
  router.post("/login", cors(), users.login);
  router.get("/", cors(), users.findAll);
  router.get("/:id", cors(), users.findOne);
  router.put("/:id", cors(), users.update)


  app.use("/user", router);
}
