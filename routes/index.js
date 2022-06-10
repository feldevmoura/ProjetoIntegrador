const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const produtoController = require('../controllers/produtoController');
const categoriasController = require('../controllers/categoriasController');
const entrarController = require('../controllers/entrarController');
const loginController = require('../controllers/loginController');
const carrinhoController = require('../controllers/carrinhoController');
const cadastroController = require('../controllers/cadastroController');
const samsungController = require('../controllers/samsungController');
const appleController  = require('../Controllers/appleController');
const motorolaController = require('../controllers/motorolaController');
const xiaomiController = require('../controllers/xiaomiController');

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
router.get('/cadastro', cadastroController.cadastro);
router.get('/categorias/samsung', samsungController.samsung);
router.get('/categorias/apple', appleController.apple);
router.get('/categorias/motorola', motorolaController.motorola);
router.get('/categorias/xiaomi', xiaomiController.xiaomi);

//Rotas POST
router.post('/login', loginController.login);

module.exports = router;
