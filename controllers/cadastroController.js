const db = require('../models/index');

const cadastroController = {
    cadastro: (req, res) => {
        res.render('cadastro')

    },
    cadastroCompleto: async (req, res) => {
        // Recebo as informações da view
        let { nome_tabela, cep, rua, numero, complemento, referencia, bairro, cidade, estado } = req.body;
        // Registro ela no banco com uma variável global
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
        } catch (error) { console.log(error.message) }
        res.send('perfil')
    }

};

module.exports = cadastroController