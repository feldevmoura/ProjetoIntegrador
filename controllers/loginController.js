const db = require('../models/index');

const loginController = {
    login: (req,res) => {
        const autenticada = true;
        if(true){
            res.redirect('/home')
        }
    }
}

module.exports = loginController