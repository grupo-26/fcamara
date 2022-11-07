const User = require("./user.model.js");

module.exports = (sequelize) => {

  class Teacher extends User { }

  Teacher.init({


  }, {
    sequelize,
    modelName: "Teacher"
  })

}
