const { body } = require('express-validator');





const validator = (req, res, next) => {
  console.log('validator')
  body('email').isEmail().withMessage('Digite um email válido'),
  body('senha').isLength({ max: 25 }, { min: 6 }).withMessage('Sua senha preisa ter no mínimo 6 caracteres e nos máximo 25')

}

module.exports = validator;



