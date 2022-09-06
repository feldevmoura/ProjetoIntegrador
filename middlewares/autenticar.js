const { check } = require('express-validator');

const autenticador = [
  check("email")
    .notEmpty().withMessage('Digite Um Email').bail()
    .isEmail().withMessage("Digite um email válido"),

  check("senha").notEmpty().withMessage('Digite Uma Senha'),
];

module.exports = autenticador;