const { DataTypes } = require("sequelize");

const db = require("../database");

const Psicologo = db.define(
    "Psicologo", {
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
            unique: true,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apresentacao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: "psicologo", timestamps: false, underscored: true }
);

module.exports = Psicologo;