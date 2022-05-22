const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().min(3),
        apresentacao: Joi.string().min(5),

    }),
});