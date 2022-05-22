const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(6).required(),
        apresentacao: Joi.string().min(5).required(),

    }),
});