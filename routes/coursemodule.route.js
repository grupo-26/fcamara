module.exports = (app) => {
    const cmod = require("../controllers/coursemodule.controller.js");  
    var router = require("express").Router();
  
    //Courses routes
    router.post("/", cmod.create);
    router.get("/", cmod.findAll);
    router.get("/:id", cmod.findOne);
  
    app.use("/module", router);
  }