const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        idade: Joi.string().isoDate().required(),
    }),
});