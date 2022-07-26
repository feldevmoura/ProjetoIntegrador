const db = require('../models/index');

const loginController = {
    login: async (req, res) => {
        const { email, senha } = req.body;
        try {

            const findUser = await db.Usuario.update({

                where: {
                    email,
                    senha
                }
            })


            if (findUser != null) {
                res.redirect('/')
            }

            console.log(findUser)
        } catch (error) { console.log(error.message) }
    }
}

module.exports = loginController