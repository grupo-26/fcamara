module.exports = (app) => {
    const cmod = require("../controllers/lesson.controller");  
    var router = require("express").Router();
  
    //Courses routes
    router.post("/", cmod.create);
    router.get("/", cmod.findAll);
    router.get("/:id", cmod.findOne);
  
    app.use("/lesson", router);
  }