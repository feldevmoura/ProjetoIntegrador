const db = require('../models/index');

const meuCadastroController = {
  meuCadastro: (req,res) => {
    res.render('meuCadastro')
  }
}

module.exports = meuCadastroController;