const AtendimentoController = {
    index: (req, res) => {
        res.json([]);
    },


    store: (req, res) => {
        res.json(req.body);
    },


    show: (req, res) => {
        const { id } = req.params;

        res.json({
            id,
            paciente_id: 117,
            data_atendimento: "2020-01-01T10:10:00z",
            observação: "Descrição do atendimento para o paciente 117."
        });
    },


    update: (req, res) => {
        const { id } = req.params;

        res.json({
            id,
            ...(req.body || {}),
        });
    },


    destroy: (req, res) => {
        res.status(204).send("");
    },
};

module.exports = AtendimentoController;