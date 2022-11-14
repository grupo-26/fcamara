const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {

  class User extends Model { }

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pontosgeral: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    progcurso1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    progcurso2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    aulascompletas: {
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
