const express = require("express");

const routes = require("./routes");
const db = require("./database");
const handleError = require("./middlewares/handleError");
// const log = require("./middlewares/log");

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(handleError);


app.listen(port, () => {
    console.log(`Servidor La-Vie - Saúde Mental está executando na porta: ${port}`);
});