const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const produtoController = require('../controllers/produtoController');
const categoriasController = require('../controllers/categoriasController');
const entrarController = require('../controllers/entrarController');
const loginController = require('../controllers/loginController');
const carrinhoController = require('../controllers/carrinhoController');
const cadastroController = require('../controllers/cadastroController');

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Rotas GET
router.get('/', homeController.home);
router.get('/home', homeController.home);
router.get('/produto', produtoController.produto);
router.get('/categorias', categoriasController.categorias);
router.get('/entrar', entrarController.entrar);
router.get('/carrinho', carrinhoController.carrinho);
router.get('/cadastro', cadastroController.cadastro)

//Rotas POST
router.post('/login', loginController.login);

module.exports = router;
