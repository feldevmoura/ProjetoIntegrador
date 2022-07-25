const db = require('../models/index');

const cadastroController = {
    cadastro: (req, res) => {
        res.render('cadastro')
        let user = req.query;
        return res.render('cadastroFinalizado')
    },
    cadastroCompleto: async (req, res) => {
        let { nome,
            email,
            senha,
            genero,
            celular,
            telefone,
            cpf,
            data_nascimento,
             } = req.body;
        console.log(email)
       try  {
        await db.Usuario.create({
            nome ,
            email ,
            senha ,
            genero,
            celular,
            telefone,
            cpf,
            data_nascimento

        })} catch(error){console.log(error.message)}
    }

};

module.exports = cadastroController