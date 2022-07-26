const db = require('../models/index');

const xiaomiController = {
  xiaomi: (req, res) => {
    res.render('xiaomi')
  },
  xiaomiMi11Cinza: (req,res) => {
    res.render('xiaomiMi11Cinza')
  },
  xiaomi12Cinza: (req,res) => {
    res.render('xiaomi12Cinza')
  },
  xiaomiRedmiNote11Cinza: (req,res) => {
    res.render('xiaomiRedmiNote11Cinza')
  }
}

module.exports = xiaomiController;