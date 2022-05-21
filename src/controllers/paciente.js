const PacienteController = {
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
            nome: `Paciente ${id}`,
            email: "fabricio.paciente@email.com",
            idade: "06/12/1997"
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

module.exports = PacienteController;