const { body } = require('express-validator');

const autenticador = [  
    body("email").notEmpty().withMessage('Digite Um Email'),
    body("senha").notEmpty().withMessage('Digite Uma Senha'),
    body("email").isEmail().withMessage("Digite um email válido"),
    body("senha").isArray({ min: 6 }, { max: 25 }).withMessage("Digite uma senha válida")
];

module.exports = autenticador;