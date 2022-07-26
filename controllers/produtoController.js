const db = require('../models/index');

const produtoController = {
    produto: (req,res) => {
    return res.render('produto')
    }
}

module.exports = produtoController;
