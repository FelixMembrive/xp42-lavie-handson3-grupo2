const { Atendimento, Paciente, Psicologo } = require("../models");
const bcrypt = require("bcryptjs");



const AtendimentoController = {
    
    index: async(req, res) => {
        const todosAtendimentos = await Atendimento.findAll({include: Paciente});
        res.status(200).json(todosAtendimentos);

        const psi_id = await Psicologo.findByPk(req.auth.id);

        console.log(psi_id)

    },

    store: async(req, res) => {
        const { paciente_id, data_atendimento, obs } = req.body;
  
        const novoAtendimento = await Atendimento.create({
            psicologo_id: req.auth.id,
            paciente_id,
            data_atendimento,
            obs
        })
        res.json(novoAtendimento)

        return res.status(400).json({
            "Mensagem do erro": "E-mail existente",
        })
    },

    show: async (req, res) => {
        const { id } = req.params;
        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            return res.status(404).json({
                message: "Id não encontrado",
            });
        };

        res.status(200).json(atendimento);
    },
};

module.exports = AtendimentoController;
