const path = require('path');
const multer = require('multer');
const { check } = require('express-validator');

const validations = [

  check('nome')
    .notEmpty().withMessage('Tem de escrever um nome').bail()
    .trim(),

  check('email')
    .notEmpty().withMessage('Tem de escrever um email').bail()
    .trim().bail()
    .normalizeEmail().bail()
    .isEmail().withMessage('Digite um formato de email correto'),

  check('senha')
    .notEmpty().withMessage('Tem de escrever uma senha').bail()
    .isLength({ min: 6 }).withMessage('A senha precisa ter 6 caracteres').bail()
    .trim(),
  
  

];

module.exports = validations;