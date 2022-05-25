const { DataTypes } = require("sequelize");

const db = require("../database");

const Paciente = db.define(
    "Pacientes", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: DataTypes.STRING,
            allowNull: false
        },
        idade: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, 
    { tableName: "paciente", timestamps: false, underscored: true }
);

module.exports = Paciente;