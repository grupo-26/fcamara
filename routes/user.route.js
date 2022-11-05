module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/create", users.create);
  router.get("/login", users.findOne);

  app.use("/user", router);
}
