const { body } = require('express-validator');





const validator = (req, res, next) => {
  console.log('validator')
  body('email').isEmail();

  
}

module.exports = validator;



