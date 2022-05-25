const { DataTypes } = require("sequelize");
const db = require("../database");
const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente")

const Atendimento = db.define(
    "Atendimento", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        psicologo_id: {
            type: DataTypes.INTEGER,
            References: {
                model: Psicologo,
                key: "id",
            },
        },
        paciente_id: {
            type: DataTypes.INTEGER,
            References: {
                model: Paciente,
                key: "id",
            },
        },
        data_atendimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        obs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
     { tableName: "atendimento", timestamps: false, underscored: true }
);

module.exports = Atendimento;