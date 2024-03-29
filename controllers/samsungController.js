const db = require('../models/index');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const samsungController = {
  samsung: async (req, res) => {
    return res.render('samsung')
  },
  s22UltraVinho: async (req, res) => {
    const produto = await db.Produto.findOne({
      where: {
        id: 1
      }
    })
    try {
      const acessorios = await db.Produto.findAll({
        where: {
          id: {
            [Op.gte]: [19]
          }
        }
      })

      const carrinho = await db.Carrinho.findAll({
        where: {
          usuario_id: 1
        }
      })
      console.log(produto)

      const produtos = await db.Produto.findAll({
        where: {
          id: {
            [Op.between]: [1, 18]
          }
        }
      })
      return res.render('s22UltraVinho', {produto ,acessorios, produtos, carrinho })
    } catch (error) { console.log('error', error.message) }
    
  },
  s22UltraAzul: async (req, res) => {
    return res.render('s22UltraAzul')
  },
  s22UltraPreto: async (req, res) => {
    return res.render('s22UltraPreto')
  },
  s22UltraBranco: async (req, res) => {
    return res.render('s22UltraBranco')
  },
  s22PlusPreto: async (req, res) => {
    res.render('s22PlusPreto')
  },
  s22Preto: async (req,res) => {
    res.render('s22Preto')
  }
}

module.exports = samsungController;