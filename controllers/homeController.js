const db = require('../models/index');

const homeController = {
    home: (req,res) => {
    return res.render('home')
    }
}

module.exports = homeController;

