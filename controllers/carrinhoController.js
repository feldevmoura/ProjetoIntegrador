
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
          usuario_id: req.session.user.id
        }
      })
      console.log('carrinho', carrinho)
      return res.render('carrinho', { produtos, carrinho, acessorios })
    } catch (error) { console.log('error', error.message) }
  },
  criarCarrinho: async (req, res) => {

    try {
      console.log(req.body);

      const carrinho = await db.Carrinho.findOne({
        where: {
          usuario_id: req.session.user.id
        }
      })

      if (carrinho.acessorio_produto_id === null) {
        const carrinhoQuantidade = carrinho.acessorio_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1
        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          {
            produto_id: 1,
            produto_quantidade: quantidadeFinal
          },
          { where: { id: req.session.user.id } }
        )
      } else {
        const carrinhoQuantidade = carrinho.acessorio_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1

        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          { acessorio_quantidade: quantidadeFinal },
          { where: { id: req.session.user.id } })

      }

      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  adicionarCarrinho: async (req, res) => {
    try {
      // const { adicionando } = req.body;
      // console.log(adicionando);

      const carrinho2 = await db.Carrinho.findOne({
        where: {
          usuario_id: req.session.user.id
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
          usuario_id: req.session.user.id
        }
      })
      const carrinhoQuantidade = carrinho.produto_quantidade;
      const quantidadeFinal = carrinhoQuantidade - 1
      if (quantidadeFinal >= 1) {

        const atualizar = await db.Carrinho.update(
          { produto_quantidade: quantidadeFinal },
          { where: { id: req.session.user.id } }
        )

      } else { }

      // console.log(carrinhoFinal)



      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  adicionarAcessorioController: async (req, res) => {
    try {
      const { idDoAcessorio } = req.body;

      const carrinho = await db.Carrinho.findOne({
        where: {
          usuario_id: req.session.user.id
        }
      })

      if (carrinho.acessorio_produto_id === null) {
        const carrinhoQuantidade = carrinho.acessorio_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1
        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          {
            acessorio_produto_id: idDoAcessorio,
            acessorio_quantidade: quantidadeFinal
          },
          { where: { id: req.session.user.id } }
        )
      } else {
        const carrinhoQuantidade = carrinho.acessorio_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1

        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          { acessorio_quantidade: quantidadeFinal },
          { where: { usuario_id: req.session.user.id } })

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
      }, { where: { id: req.session.user.id } })
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
          usuario_id: req.session.user.id
        }
      })
      const carrinhoAcessorioQuantidade = carrinho.acessorio_quantidade;
      const quantidadeFinal = carrinhoAcessorioQuantidade - 1
      console.log(quantidadeFinal)
      if (quantidadeFinal >= 1) {

        const atualizar = await db.Carrinho.update(
          { acessorio_quantidade: quantidadeFinal },
          { where: { usuario_id: req.session.user.id } }
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
          usuario_id: req.session.user.id
        }
      })

      const carrinhoAcessorioQuantidade = carrinho.acessorio_quantidade;
      const quantidadeFinal = carrinhoAcessorioQuantidade + 1

      const atualizar = await db.Carrinho.update(
        { acessorio_quantidade: quantidadeFinal },
        { where: { usuario_id: req.session.user.id } }
      )

      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  concluirCarrinho: async (req, res) => {
    try {

      try {

        const carrinho = await db.Carrinho.findOne({
          where: {
            usuario_id: req.session.user.id
          }
        })

        const adicionarPedido = await db.Pedido.create({
          numeroPedido: Math.floor(Math.random() * 1000000000),
          usuario_id: req.session.user.id,
          produto_quantidade: carrinho.produto_quantidade,
          produto_id: carrinho.produto_id,
          acessorio_produto_id: carrinho.acessorio_produto_id,
          acessorio_quantidade: carrinho.acessorio_quantidade
        })


        const apagartudo = await db.Carrinho.update({
          produto_id: null,
          produto_quantidade: null,
          acessorio_produto_id: null,
          acessorio_quantidade: null
        }, { where: { id: req.session.user.id } })

        res.redirect('/comprafinalizada')
      } catch (error) { console.log(error) }

    } catch (error) { console.log('error', error.message) }
  }

};

module.exports = carrinhoController;

