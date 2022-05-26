const { Atendimento, Paciente, Psicologo } = require("../models");

const AtendimentoController = {
    
    index: async(req, res) => {
        const todosAtendimentos = await Atendimento.findAll({attributes: ["id", "psicologo_id", "data_atendimento", "obs" ], include: Paciente});
        res.status(200).json(todosAtendimentos);
    },

    store: async(req, res) => {
        const { paciente_id, data_atendimento, obs } = req.body;
        const pacienteExistente = await Paciente.count({ where: { id: paciente_id }})

        if (pacienteExistente != 0 ){
            const novoAtendimento = await Atendimento.create({
                psicologo_id: req.auth.id,
                paciente_id,
                data_atendimento,
                obs
            })
            res.json(novoAtendimento)
        } else {    
            return res.status(400).json({
            "Mensagem do erro": "Paciente não existente",
            })
        }    
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