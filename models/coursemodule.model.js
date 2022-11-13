const { Model, DataTypes } = require("sequelize");
//const Lesson = require("./lesson.model.js");

module.exports = (sequelize) => {

  class CourseModule extends Model { }

  CourseModule.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    stack: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    modsigla: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
  }, {
    sequelize,
    modelName: "CourseModule"
  })

  return CourseModule;
}
