const { body } = require('express-validator');

const autenticador = [
  body("email")
    .notEmpty().withMessage('Digite Um Email').bail()
    .isEmail().withMessage("Digite um email válido"),

  body("senha").notEmpty().withMessage('Digite Uma Senha'),
];

module.exports = autenticador;