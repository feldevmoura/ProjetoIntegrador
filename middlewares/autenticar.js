const { body } = require('express-validator');

const autenticador = [  
    body("email").notEmpty().withMessage('Digite Um Email Valido'),
    body("senha").notEmpty().withMessage('Digite Uma Senha Valida'),
];

module.exports = autenticador;