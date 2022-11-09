module.exports = (app) => {
    const coursers = require("../controllers/course.controller.js");  
    var router = require("express").Router();
  
    //Courses routes
    router.post("/", coursers.create);
    router.get("/", coursers.findAll);
    /*router.get("/", (req, res) => {
        res.json({ message: "Welcome to application." });
      });*/
  
    app.use("/courses", router);
  }