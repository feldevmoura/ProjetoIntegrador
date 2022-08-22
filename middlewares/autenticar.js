const { body } = require('express-validator');

const autenticador = [  
    body("email").notEmpty().withMessage('Digite Um Email'),
    body("senha").notEmpty().withMessage('Digite Uma Senha'),
    body("email").isEmail().withMessage("Digite um email válido")
];

module.exports = autenticador;