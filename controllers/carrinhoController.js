const db = require('../models/index');


const carrinhoController = {

    carrinho: async (req, res) => {
        // const carrinho = await db.CarrinhoProduto.findOne({
        //     raw: true,
        //     nest: true,
        //     where:{
        //         usuario_id: 1
        //     }
        // });
        // const produto = await db.Produto.findByPk(
        //     carrinho.produto_id
        // )
        // console.log(produto)


        return res.render('carrinho', )

    },
    adicionarCarrinho: async (req, res) => {
        const {adicionando} = req.body;
        console.log(req.body);

        const metodoAq = await db.CarrinhoProduto.create({
            carrinho_id: 1,
            quantidade: 1, 
            produto_id: 1
        })

        res.redirect('/carrinho')
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