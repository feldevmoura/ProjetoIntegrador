const { body } = require('express-validator');





const validator = (req, res, next) => {
  console.log('validator')
  body('email').isEmail();
  body('nome').notEmpty().withMessage('Digite um nome');
  
}

module.exports = validator;



