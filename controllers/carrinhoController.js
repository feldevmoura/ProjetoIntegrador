
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

      const AcessorioCarrinho = await db.Acessorio.findAll({
        where: {
          usuarioId: req.session.user.id
        }
      })

      const carrinho = await db.Carrinho.findOne({
        where: {
          usuario_id: req.session.user.id
        }
      })
      console.log('carrinho')
      return res.render('carrinho', { produtos, carrinho, acessorios, AcessorioCarrinho })
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
      if (req.session.user.id != null) {
        const carrinho2 = await db.Carrinho.findOne({
          where: {
            usuario_id: req.session.user.id
          }
        })
        const carrinhoQuantidade = carrinho2.produto_quantidade;

        const quantidadeFinal = carrinhoQuantidade + 1
        // console.log(carrinhoFinal)

        const atualizar = await db.Carrinho.update(
          { produto_id: 1, produto_quantidade: quantidadeFinal },
          { where: { usuario_id: req.session.user.id } }
        )
        res.redirect('/carrinho')
      }
      res.redirect('/entrar')

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
          { where: { usuario_id: req.session.user.id } }
        )

      } else { }

      // console.log(carrinhoFinal)



      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  adicionarAcessorioController: async (req, res) => {
    try {
      if (req.session.user.id != null) {

        const { idDoAcessorio } = req.body;
        const carrinho = await db.Carrinho.findOne({
          where: {
            usuario_id: req.session.user.id
          }
        })

        // console.log('AQUIOOOOOOOOOOOOOOOOOOOOOOOOOOOO', carrinho)

        const atualizar = await db.Acessorio.create({
          carrinhoId: carrinho.id,
          usuarioId: req.session.user.id,
          acessorioId: idDoAcessorio,
          quantidadeAcessorio: 1,
        });

        res.redirect('/s22UltraVinho')
      }
      res.redirect('/entrar')

    } catch (error) { console.log(error) }
  },
  deletarCarrinho: async (req, res) => {
    try {
      const apagartudo = db.Carrinho.update({
        produto_id: null,
        produto_quantidade: null
      }, { where: { usuario_id: req.session.user.id } })

      const apagartudoAcessorio = await db.Acessorio.destroy({
        where: { usuarioId: req.session.user.id }
      })

      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  diminuirAcessorioCarrinho: async (req, res) => {
    try {

      let { idDoAcessorio } = req.body;
      let acessorioQuantidade = await db.Acessorio.findOne({
        where: {
          id: idDoAcessorio
        }
      })

      console.log('AQUIOOOOOOOOOOOOOOOOOOOOOOOOOOOO', acessorioQuantidade.quantidadeAcessorio)
      if (acessorioQuantidade.quantidadeAcessorio > 1) {
        const carrinho = await db.Acessorio.findOne({
          where: {
            id: idDoAcessorio
          }
        })
        let quantidadePega = carrinho.quantidadeAcessorio - 1;
        const atualizar = await db.Acessorio.update({
          quantidadeAcessorio: quantidadePega
        },
          { where: { id: idDoAcessorio } }
        )

        res.redirect('/carrinho')
      }
      res.redirect('/carrinho')

    } catch (error) { console.log(error) }
  },
  aumentarAcessorioCarrinho: async (req, res) => {
    try {
      let { idDoAcessorio } = req.body;
      let acessorioQuantidade = await db.Acessorio.findOne({
        where: {
          id: idDoAcessorio
        }
      })

      console.log('AQUIOOOOOOOOOOOOOOOOOOOOOOOOOOOO', acessorioQuantidade.quantidadeAcessorio)
      if (acessorioQuantidade.quantidadeAcessorio < 100) {
        const carrinho = await db.Acessorio.findOne({
          where: {
            id: idDoAcessorio
          }
        })
        let quantidadePega = carrinho.quantidadeAcessorio + 1;
        const atualizar = await db.Acessorio.update({
          quantidadeAcessorio: quantidadePega
        },
          { where: { id: idDoAcessorio } }
        )

        res.redirect('/carrinho')
      }
      res.redirect('/carrinho')
    } catch (error) { console.log(error) }
  },
  comprar: async (req, res) => {
    try {
      let carrinho = await db.Carrinho.create({
        usuario_id: newUser.id
      })

    } catch (error) { console.log(error) }
  },
  deletarOAcessorio: async (req, res) => {
    try {
      let { idDoAcessorio } = req.body;

      let acessoriosCarrinho = await db.Acessorio.destroy({
        where: { id: idDoAcessorio }
      })
      res.redirect('/carrinho')
    } catch (error) { console.log() }
  },


};

module.exports = carrinhoController;

