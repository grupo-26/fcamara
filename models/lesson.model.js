const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    class Lesson extends Model { }

    Lesson.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modsigla: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        linkvideo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        linkpdf: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Lesson"
    })

    return Lesson;
}