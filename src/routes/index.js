const express = require("express");

const HomeController = require("../controllers/home");

const PsicologoController = require("../controllers/psicologo");

const psicologoStoreValidation = require("../validators/psicologo/store");
const psicologoUpdateValidation = require("../validators/psicologo/update")


const auth = require("../middlewares/auth");

const LoginController = require("../controllers/login");
const loginValidation = require("../validators/psicologo/login");

const PacienteController = require("../controllers/paciente");

const AtendimentoController = require("../controllers/atendimento");

const router = express.Router();

router.get("/", HomeController.welcome);

router.post("/login", loginValidation, LoginController.login);


router.get("/psicologos", PsicologoController.index);
router.post("/psicologos", psicologoStoreValidation, PsicologoController.store);
router.get("/psicologos/:id", PsicologoController.show);
router.put("/psicologos/:id", auth, psicologoUpdateValidation, PsicologoController.update);
router.delete("/psicologos/:id", PsicologoController.destroy);


router.get("/pacientes", PacienteController.index);
router.post("/pacientes", PacienteController.store);
router.get("/pacientes/:id", PacienteController.show);
router.put("/pacientes/:id", PacienteController.update);
router.delete("/pacientes/:id", PacienteController.destroy);

router.get("/atendimentos", auth, AtendimentoController.index);
router.post("/atendimentos", auth, AtendimentoController.store);
router.get("/atendimentos/:id", auth, AtendimentoController.show);

module.exports = router;