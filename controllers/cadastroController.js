const db = require('../models/index');
const { check, validationResult } = require('express-validator');
const cadastroController = {
	cadastro: (req, res) => {
		if(typeof(req.session.user) == "undefined"){
      res.render('cadastro');
  }
		return res.redirect('/perfil');
	},
	cadastroCompleto: async (req, res) => {
		const resultValidations = validationResult(req);

		if (resultValidations.errors.length > 0) {
			return res.render('cadastro', {
				errors: resultValidations.mapped(),
				oldData: req.body
			})
		}
		else {
			let { nome_tabela, cep, rua, numero, complemento, referencia, bairro, cidade, estado } = req.body;
			try {
				var novoEndereco = await db.Endereco.create({
					nome_tabela, cep, rua, numero, complemento, referencia, bairro, cidade, estado
				})

				console.log(novoEndereco);
			} catch (error) { console.log(error) }

			//Recebo as informações da view
			let { nome, email, senha, genero, celular, telefone, cpf, data_nascimento } = req.body;

			try {
				var newUser = await db.Usuario.create({
					nome, email, senha, genero, celular,
					telefone, cpf, data_nascimento, endereco_id: novoEndereco.id
				})
				console.log(newUser)

				var carrinho = await db.Carrinho.create({
					usuario_id: newUser.id
				})
			} catch (error) { console.log(error.message) }
			
			res.render('entrar')
		}
	}

};

module.exports = cadastroController