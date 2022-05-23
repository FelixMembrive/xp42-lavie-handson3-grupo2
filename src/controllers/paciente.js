const { Paciente } = require("../models");

const PacienteController = {
    index: async(req, res) => {
        const todosPaciente = await Paciente.findAll();
        res.json(todosPaciente);
    },


    store: async(req, res) => {
        const { nome, email, idade, } = req.body;
        const emailExistente = await Paciente.count({ where: { email, } });

        if (emailExistente == 0) {
            const novoPaciente = await Paciente.create({
                nome,
                email,
                idade
            })
            res.json(novoPaciente)
        } else {
            return res.status(400).json({
                "Mensagem do erro": "E-mail existente",
            })
        }
    },


    show: async(req, res) => {
        const { id, } = req.params;
        const paciente = await Paciente.findByPk(id)

        if (!paciente) {
            return res.status(404).json({
                "Mensagem do erro": "Id não encontrado",
            });
        }

        const { nome, email, idade } = paciente;

        res.json({
            id,
            nome,
            email,
            idade
        })
    },

    update: async(req, res) => {
        const { id } = req.params;
        const { nome, email, idade } = req.body;

        const paciente = await Paciente.findByPk(id);

        if (!paciente) {
            return res.status(404).json({
                "Mensagem do erro": "Id não encontrado",
            });
        }

        await Paciente.update({
            nome,
            email,
            idade
        }, {
            where: { id, }
        });

        const pacienteAtualizado = await Paciente.findByPk(id)
        res.json(pacienteAtualizado);
    },


    destroy: async(req, res) => {
        const { id } = req.params;
        const paciente = await Paciente.findByPk(id);

        if (!paciente) {
            return res.status(404).json({
                "Mensagem do erro": "Id não encontrado",
            });
        }

        try {
            await paciente.destroy();
            res.status(204).send();

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ "Mensagem de erro": "Este paciente não pôde ser deletado" });
        }
    },
};

module.exports = PacienteController;