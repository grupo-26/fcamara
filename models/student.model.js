const { DataTypes } = require("sequelize");
const User = require("./user.model.js");
const Course = require("./courses.model");

exports.module = (sequelize) => {

  class Student extends User { }

  Student.init({
    badges: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      unique: false
    },
    courses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      unique: false
    }
  }, {
    sequelize,
    modelName: "Student"
  })

  Student.Courses = Student.belongsToMany(Course);

  return Student
}
