const db = require('../models/index');

const entrarController = {
  entrar: (req, res) => {

    if(typeof(req.session.user) != "undefined"){
      res.redirect('/perfil');
  }
		return res.render('entrar');
	}
  
}

module.exports = entrarController;