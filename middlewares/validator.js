const { body, validationResult } = require('express-validator');





const validator = (req, res, next) => {
  console.log('validator')
  body('email').isEmail();

  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next()
}

module.exports = validator;



