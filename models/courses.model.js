const { Model, DataTypes } = require("sequelize");
//const Lesson = require("./lesson.model.js");

module.exports = (sequelize) => {

  class Course extends Model { }

  Course.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    stack: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {
    sequelize,
    modelName: "Course"
  })

  return Course;
}
