const db = require('../models/index');

const endPurchaseController = {
  purchase: (req, res) => {
    res.render('purchase')
  }
};

module.exports = endPurchaseController;