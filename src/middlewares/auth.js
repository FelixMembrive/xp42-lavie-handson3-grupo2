// const { Psicologo } = require("../models");

// module.exports = async(req, res, next) => {
//     if (req.auth) {
//         const psicologo = await Psicologo.findByPk(req.auth.id);
//         if (!psicologo) {
//             next({
//                 status: 401,
//                 name: "UnauthorizedError",
//                 inner: {
//                     message: "Invalid user code",
//                 },
//             });
//         }
//     }

//     next();
// };

const { expressjwt } = require("express-jwt");

const secret = require("../configs/secret");

module.exports = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
});