const { Sequelize } = require("sequelize");
const UserController = require("../../../xp42-node/03-express/src/controllers/usuario");

const DB_NAME = "lavieDB";
const DB_USER = "admin";
const DB_PASS = "Mouse13245";
const DB_CONFIG = {
    host: "database-1.clc8mdz0t8yf.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
    console.error("Erro ao conectar com o banco de dado: ", error.message)
};

const hasConnection = async() => {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.error("Erro ao conectar com o banco de dado: ", error.message)
    }
};

Object.assign(db, { hasConnection });

module.exports = db;