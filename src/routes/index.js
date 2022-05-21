const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
router.get("/", HomeController.welcome);


const PacienteController = require("../controllers/paciente");
router.get("/pacientes", PacienteController.index);
router.post("/pacientes", PacienteController.store);
router.get("/pacientes/:id", PacienteController.show);
router.put("/pacientes/:id", PacienteController.update);
router.delete("/pacientes/:id", PacienteController.destroy);


const PsicologoController = require("../controllers/psicologo");
router.get("/psicologos", PsicologoController.index);
router.post("/psicologos", PsicologoController.store);
router.get("/psicologos/:id", PsicologoController.show);
router.put("/psicologos/:id", PsicologoController.update);
router.delete("/psicologos/:id", PsicologoController.destroy);


const AtendimentoController = require("../controllers/atendimento");
router.get("/atendimentos", AtendimentoController.index);
router.post("/atendimentos", AtendimentoController.store);
router.get("/atendimentos/:id", AtendimentoController.show);


module.exports = router;