const cadastroController = {
    cadastro: (req,res) => {
        res.render('cadastro')
        let user = req.query;
        return res.render('cadastroFinalizado')
    }
    
};

module.exports = cadastroController