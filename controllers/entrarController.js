const db = require('../models/index');

const entrarController = {
    entrar: (req,res) => {
    return res.render('entrar')
    }
}

module.exports = entrarController;