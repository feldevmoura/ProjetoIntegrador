const db = require('../models/index');
const { validationResult } = require('express-validator');

const loginController = {
	login: async (req, res) => {
		const { email, senha } = req.body;
		try {
			const findUser = await db.Usuario.findOne({

				where: {
					email,
					senha
				}
			})

			let errors = validationResult(req)
			if (!errors.isEmpty()) {
				let {email} = req.body;
				console.log(errors.mapped())
				return res.render('entrar', { errors: errors.mapped(), old: req.body });
			}
			if (findUser != null) {
				req.session.user = findUser;
				res.redirect('/')
			} else{
				let userNotFounded = 'Email ou senha estão incorretos!'
				res.redirect('/entrar')
			}







			console.log(findUser)
		} catch (error) { console.log(error.message) }
	}
}

module.exports = loginController