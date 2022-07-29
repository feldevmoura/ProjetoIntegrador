const db = require('../models/index');


const carrinhoController = {

    carrinho: async (req, res) => {
        return res.render('carrinho')
    }
    // carrinho: async (req, res) => {

    //     try {
    //         const {id} = req.params;
    //         const saveCarrinho = await db.Produto.create({id_produto: id});
    //         console.log(getProdutos)
            
    //     } catch (error) { console.log(error.message) }
    // }

};

module.exports = carrinhoController;