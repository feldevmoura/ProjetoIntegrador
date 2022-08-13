
const db = require('../models/index');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const carrinhoController = {

  carrinho: async (req, res) => {
    try {
      const acessorios = await db.Produto.findAll({
        where: {
          id: {
            [Op.gte]: [19]
          }
        }
      })
      const produtos = await db.Produto.findAll({
        where: {
          id: {
            [Op.between]: [1, 18]
          }
        }
      })

      const carrinho = await db.Carrinho.findOne({
        where: {
          id: 1
        }
      })
      // console.log()
      return res.render('carrinho', { produtos, carrinho, acessorios })
    } catch (error) { console.log('error', error.message) }
  },
  criarCarrinho: async (req, res) => {

    try {
      const {criandoCarrinho} = req.body;
      console.log('value',criandoCarrinho)
      const carrinho = db.Carrinho.create({
        usuario_id: 1,
        produto_id: criandoCarrinho,
        produto_quantidade: 1
      })
      
      
      
      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  adicionarCarrinho: async (req, res) => {
    try {
      // const { adicionando } = req.body;
      // console.log(adicionando);

      const carrinho2 = await db.Carrinho.findOne({
        where: {
          id: 1
        }
      })
      const carrinhoQuantidade = carrinho2.produto_quantidade;

      const quantidadeFinal = carrinhoQuantidade + 1
      // console.log(carrinhoFinal)

      const atualizar = await db.Carrinho.update(
        { produto_quantidade: quantidadeFinal },
        { where: { id: 1 } }
      )

      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  diminuirCarrinho: async (req, res) => {
    try {
      const carrinho = await db.Carrinho.findOne({
        where: {
          id: 1
        }
      })
      const carrinhoQuantidade = carrinho.produto_quantidade;
      const quantidadeFinal = carrinhoQuantidade - 1
      if (quantidadeFinal >= 1) {

        const atualizar = await db.Carrinho.update(
          { produto_quantidade: quantidadeFinal },
          { where: { id: 1 } }
        )

      } else { }

      // console.log(carrinhoFinal)



      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  adicionarAcessorioController: async (req, res) => {
    try {
      const { adicionando } = req.body;
      console.log(req.body);

      const carrinho = await db.Carrinho.findOne({
        where: {
          id: 1
        }
      })

      if (carrinho.acessorio_produto_id === null) {
        const carrinhoQuantidade = carrinho.acessorio_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1
        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          {
            acessorio_produto_id: 19,
            acessorio_quantidade: quantidadeFinal
          },
          { where: { id: 1 } }
        )
      } else {
        const carrinhoQuantidade = carrinho.acessorio_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1

        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          { acessorio_quantidade: quantidadeFinal },
          { where: { id: 1 } })

      }




      res.redirect('/s22UltraVinho')
    } catch (error) { console.log(error) }
  },
  // deletarCarrinho: async (req, res) => {
  //   try {
  //     const deletandoCarrinho = db.Carrinho.destroy({
  //       where: {
  //         id: 1
  //       }
  //     })
  //     res.redirect('/')
  //   } catch (error) { console.log(error) }
  // }
  deletarCarrinho: async (req, res) => {
    try {
      const apagartudo = db.Carrinho.update({
        produto_id: null,
        produto_quantidade: null,
        acessorio_produto_id: null,
        acessorio_quantidade: null
      }, { where: { id: 1 } })
      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  deletarAcessorioCarrinho: async (req, res) => {
    try {
      const apagartudo = db.Carrinho.update({
        acessorio_produto_id: null,
        acessorio_quantidade: null
      }, {
        where: { id: 1 }
      })

      res.redirect('/carrinho')
      
    } catch (error) { console.log(error) }
  },
  diminuirAcessorioCarrinho: async (req, res) => {
    try {
      const carrinho = await db.Carrinho.findOne({
        where: {
          id: 1
        }
      })
      const carrinhoAcessorioQuantidade = carrinho.acessorio_quantidade;
      const quantidadeFinal = carrinhoAcessorioQuantidade - 1
      console.log(quantidadeFinal)
      if (quantidadeFinal >= 1) {

        const atualizar = await db.Carrinho.update(
          { acessorio_quantidade: quantidadeFinal },
          { where: { id: 1 } }
        )

      } else { }

      // console.log(carrinhoFinal)



      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  aumentarAcessorioCarrinho: async (req, res) => {
    try {
      const carrinho = await db.Carrinho.findOne({
        where: {
          id: 1
        }
      })

      const carrinhoAcessorioQuantidade = carrinho.acessorio_quantidade;
      const quantidadeFinal = carrinhoAcessorioQuantidade + 1

      const atualizar = await db.Carrinho.update(
        { acessorio_quantidade: quantidadeFinal },
        { where: { id: 1 } }
      )

      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  }

};

module.exports = carrinhoController;

