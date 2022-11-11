const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {

  class User extends Model { }

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    experience: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
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
  },
    {
      sequelize,
      modelName: "User"
    });

  return User;
}
