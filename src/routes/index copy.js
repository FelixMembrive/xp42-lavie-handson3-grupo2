const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
router.get("/", HomeController.welcome);

const auth = require("../middlewares/auth");

const LoginController = require("../controllers/login");
const loginValidation = require("../validators/psicologo/login");
router.post("/login", loginValidation, LoginController.login);


const PsicologoController = require("../controllers/psicologo");
const psicologoStoreValidation = require("../validators/psicologo/store");
const psicologoUpdateValidation = require("../validators/psicologo/update")
router.get("/psicologos", PsicologoController.index);
router.post("/psicologos", auth, psicologoStoreValidation, PsicologoController.store);
router.get("/psicologos/:id", PsicologoController.show);
router.put("/psicologos/:id", auth, psicologoUpdateValidation, PsicologoController.update);
router.delete("/psicologos/:id", PsicologoController.destroy);


const PacienteController = require("../controllers/paciente");
router.get("/pacientes", PacienteController.index);
router.post("/pacientes", PacienteController.store);
router.get("/pacientes/:id", PacienteController.show);
router.put("/pacientes/:id", PacienteController.update);
router.delete("/pacientes/:id", PacienteController.destroy);

const AtendimentoController = require("../controllers/atendimento");
router.get("/atendimentos", AtendimentoController.index);
router.post("/atendimentos", AtendimentoController.store);
router.get("/atendimentos/:id", AtendimentoController.show);

module.exports = router;