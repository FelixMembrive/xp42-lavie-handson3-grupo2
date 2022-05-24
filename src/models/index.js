const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");
const Atendimento = require("./Atendimento");

Atendimento.belongsTo(Paciente);


module.exports = {
    Psicologo,
    Paciente,
    Atendimento
};