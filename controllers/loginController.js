const db = require('../models/index');
const {validationResult} = require('express-validator');

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

			if (findUser != null) {
				req.session.user = findUser;
				res.redirect('/')
			}
			
			let errors = validationResult(req)
			if (errors.isEmpty()) {
			} else {
				console.log(errors.mapped())
				return res.render('entrar', { errors: errors.mapped(), old: req.body });
			}


			console.log(findUser)
		} catch (error) { console.log(error.message) }
	}
}

module.exports = loginController