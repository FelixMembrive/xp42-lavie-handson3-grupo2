const PsicologoController = {
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
            nome: `Psicologo ${id}`,
            email: "fabricio.psicologo@email.com",
            senha: 123456,
            apresentacao: "Sou um psicólogo incrível e muito bom"
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

module.exports = PsicologoController;