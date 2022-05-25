const { Psicologo } = require("../models");
const bcrypt = require("bcryptjs")

const PsicologoController = {
    index: async(req, res) => {
        const todosPsicologos = await Psicologo.findAll();
        res.json(todosPsicologos);
    },

    store: async(req, res) => {
        const { nome, email, senha, apresentacao } = req.body;
        const emailExistente = await Psicologo.count({ where: { email, } });

        const senhaCriptografada = bcrypt.hashSync(senha, 10)

        if (emailExistente == 0) {
            const novoPsicologo = await Psicologo.create({
                nome,
                email,
                senha: senhaCriptografada,
                apresentacao
            })
            res.json(novoPsicologo)
        } else {
            return res.status(400).json({
                "Mensagem do erro": "E-mail existente",
            })
        }
    },

    show: async(req, res) => {
        const { id, } = req.params;
        const psicologo = await Psicologo.findByPk(id)

        if (!psicologo) {
            return res.status(404).json({
                "Mensagem do erro": "Id não encontrado",
            });
        }

        const { nome, email, apresentacao } = psicologo;

        res.json({
            id,
            nome,
            email,
            apresentacao
        })
    },

    update: async(req, res) => {
        const { id } = req.params;
        const { nome, apresentacao } = req.body;

        const psicologo = await Psicologo.findByPk(id);

        if (!psicologo) {
            return res.status(404).json({
                "Mensagem do erro": "Id não encontrado",
            });
        }

        await Psicologo.update({
            nome,
            apresentacao,
        }, {
            where: { id, }
        });

        const psicologoAtualizado = await Psicologo.findByPk(id)
        res.json(psicologoAtualizado);
    },

    destroy: async(req, res) => {
        const { id } = req.params;
        const psicologo = await Psicologo.findByPk(id);

        if (!psicologo) {
            return res.status(404).json({
                "Mensagem do erro": "Id não encontrado",
            });
        }
        try {
            await psicologo.destroy();
            res.status(204).send("");

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ "Mensagem de erro": "Este psicólogo não pôde ser deletado" });
        }
    },
};

module.exports = PsicologoController;