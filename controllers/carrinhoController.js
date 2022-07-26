const db = require('../models/index');


const carrinhoController = {
    carrinho: (req,res) => {
        res.render('carrinho')
    }

};

module.exports = carrinhoController;