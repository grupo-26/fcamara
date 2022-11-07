const { DataTypes } = require("sequelize");
const Course = require("./class.model.js");

module.exports = (sequelize) => {

  class Lesson extends Model { }

  Lesson.init({
    title: {
      data: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      data: DataTypes.TEXT,
      allowNull: true,
    },
    videoLink: {
      data: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: "Lesson"
  })

  Lesson.Course = Lesson.belongsTo(Course);

  return Lesson;
}
