const { Atendimento, Paciente, Psicologo } = require("../models");

const dashboardController = {

    index: async(req, res) => {

        const rota = req.route.path

        if(rota === '/dashboard/numero-paciente' ){

        const todosPacientes = await Paciente.count();
        
        res.status(200).json("Temos um total de " + todosPacientes + " Pacientes");

        }

         else if(rota === '/dashboard/numero-atendimento' ){

        const todosAtendimentos = await Atendimento.count();
        
        res.status(200).json("Temos um total de " + todosAtendimentos + " Atendimentos");

        }

         else if(rota === '/dashboard/numero-psicologo' ){

        const todosPsicologo = await Psicologo.count();
        
        res.status(200).json("Temos um total de " + todosPsicologo + " Psicólogos");

        }

        else if(rota === '/dashboard/media-atendimento' ){

        const todosPsicologo = await Psicologo.count();
        const todosAtendimentos = await Atendimento.count();
        const mediaAtendimento = await todosAtendimentos / todosPsicologo;
        
        res.status(200).json("A média de atendimento é de " + mediaAtendimento.toFixed(2) + " para cada psicologo");

        }
    },
}

module.exports = dashboardController;