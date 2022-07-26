const db = require('../models/index');

const categoriasController = {
    categorias: (req,res) => {
    return res.render('categorias')
    }
}

module.exports = categoriasController;
