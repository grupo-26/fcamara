const { Model, DataTypes } = require("sequelize");
const Student = require("./student.model.js");
const Lesson = require("./lesson.model.js");

module.exports = (sequelize) => {

  class Course extends Model { }

  Course.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    stack: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      unique: false
    }
  }, {
    sequelize,
    modelName: "Course"
  })

  Course.Lessons = Course.hasMany(Lesson);

  return Course;
}
