const db = require('../models/index');

const entrarController = {
  entrar: (req, res) => {

    if(typeof(req.session.user) != "undefined"){
      res.redirect('/perfil');
  }
    let teste = 'emailErrado'
		return res.render('entrar', {
      oldData: req.body
    });
	}
  
}

module.exports = entrarController;