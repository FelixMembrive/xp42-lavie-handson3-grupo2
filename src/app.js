const express = require("express");
const routes = require("./routes");
const db = require("./database");
const handleError = require("./middlewares/handleError");
const authMiddleware = require("./middlewares/auth");
const jwtMiddleware = require("./middlewares/jwt");

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jwtMiddleware.unless({ path: ["/", "/login", "/psicologos"]  }));
app.use(authMiddleware);
app.use(routes);
app.use(handleError);

app.use((req, res) => {
    res.status(404).json({ "Mensagem do erro": "URL não encontrada" });
});


app.listen(port, () => {
    console.log(`Servidor La-Vie - Saúde Mental está executando na porta: ${port}`);
});