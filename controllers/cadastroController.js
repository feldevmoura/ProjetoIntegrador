const db = require('../models/index');

const cadastroController = {
    cadastro: (req, res) => {
        res.render('cadastro')
        let user = req.query;
        return res.render('cadastroFinalizado')
    },
    cadastroCompleto: async (req, res) => {
        let {cep, rua, numero, complemento, referencia, bairro, cidade, estado} = req.body;
        let {nome,email,senha,genero,celular,telefone,cpf,data_nascimento} = req.body;

       try  {

        const newUser = await db.Usuario.create({
            nome ,
            email ,
            senha ,
            genero,
            celular,
            telefone,
            cpf,
            data_nascimento

        })
    
        console.log(newUser)    } catch(error){console.log(error.message)}
    }



};

module.exports = cadastroController