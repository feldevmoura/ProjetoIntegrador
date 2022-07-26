const db = require('../models/index');

const perfilController = {
  perfil: (req, res) => {
    res.render('perfil')
  }
};

module.exports = perfilController;