const db = require('../models/index');

const pedidosController = {
  pedidos: (req, res) =>{
    return res.render('pedidos')
  }
}

module.exports = pedidosController;