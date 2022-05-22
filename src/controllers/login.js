const { Psicologo } = require("../models");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const LoginController = {
    login: async(req, res) => {
        const { email, senha } = req.body;

        const psicologo = await Psicologo.findOne({
            where: {
                email,
            }
        })

        if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json({ "Mensagem do erro": "Email ou senha inválido, verifique e tente novamente" })
        }

        const psicologoInfos = {
            id: psicologo.id,
            nome: psicologo.nome,
            email: psicologo.email,
        };

        const token = jwt.sign(psicologoInfos, secret.key);

        return res.json(token)

    },
}

module.exports = LoginController;