const express = require("express");
const router = express.Router();

const LoginController = require("../controllers/login");
const HomeController = require("../controllers/home");
const PsicologoController = require("../controllers/psicologo");
const PacienteController = require("../controllers/paciente");
const AtendimentoController = require("../controllers/atendimento");
const dashboardController = require("../controllers/dashboard");

const loginValidation = require("../validators/psicologo/login");
const psicologoStoreValidation = require("../validators/psicologo/store");
const psicologoUpdateValidation = require("../validators/psicologo/update");
const pacienteStoreUpadateValidation = require("../validators/paciente/store-update");
const atendimentoStoreValidation = require("../validators/atendimento/store");

router.get("/", HomeController.welcome);

router.post("/login", loginValidation, LoginController.login);

router.get("/psicologos", PsicologoController.index);
router.post("/psicologos", psicologoStoreValidation, PsicologoController.store);
router.get("/psicologos/:id", PsicologoController.show);
router.put("/psicologos/:id", psicologoUpdateValidation, PsicologoController.update);
router.delete("/psicologos/:id", PsicologoController.destroy);

router.get("/pacientes", PacienteController.index);
router.post("/pacientes", pacienteStoreUpadateValidation, PacienteController.store);
router.get("/pacientes/:id", PacienteController.show);
router.put("/pacientes/:id", pacienteStoreUpadateValidation, PacienteController.update);
router.delete("/pacientes/:id", PacienteController.destroy);

router.get("/atendimentos", AtendimentoController.index);
router.post("/atendimentos", atendimentoStoreValidation, AtendimentoController.store);
router.get("/atendimentos/:id", AtendimentoController.show);

router.get("/dashboard/numero-paciente", dashboardController.index);
router.get("/dashboard/numero-atendimento", dashboardController.index);
router.get("/dashboard/numero-psicologo", dashboardController.index);
router.get("/dashboard/media-atendimento", dashboardController.index)

module.exports = router;