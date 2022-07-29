const db = require('../models/index');

const produtoController = {
    produto: (req,res) => {
    return res.render('produto')
    },

    getAllProdutos: async (req, res) => {

        try {

            const getProdutos = await db.Produto.findAll();
            console.log(getProdutos)
            
        } catch (error) { console.log(error.message) }
    }
}

module.exports = produtoController;
