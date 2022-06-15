const express = require('express');
const router = express.Router();

//home
const homeController = require('../controllers/homeController');
router.get('/', homeController.home);
router.get('/home', homeController.home);

//página do produto
const produtoController = require('../controllers/produtoController');
router.get('/produto', produtoController.produto);

//página do cadastro
const cadastroController = require('../controllers/cadastroController');
router.get('/cadastro', cadastroController.cadastro);

//página do login
const entrarController = require('../controllers/entrarController');
router.get('/entrar', entrarController.entrar);

//redirect para logar
const loginController = require('../controllers/loginController');
router.post('/login', loginController.login);

//página carrinho
const carrinhoController = require('../controllers/carrinhoController');
router.get('/carrinho', carrinhoController.carrinho);

//página pedidos
const pedidosController = require('../controllers/pedidosController');
router.get('/pedidos', pedidosController.pedidos);

//página compra finalizada
const endPurchaseController = require('../controllers/endPurchaseController');
router.get('/comprafinalizada', endPurchaseController.purchase);

//página de categorias
const categoriasController = require('../controllers/categoriasController');
router.get('/categorias', categoriasController.categorias);
const samsungController = require('../controllers/samsungController');
router.get('/categorias/samsung', samsungController.samsung);
const appleController  = require('../Controllers/appleController');
router.get('/categorias/apple', appleController.apple);
const motorolaController = require('../controllers/motorolaController');
router.get('/categorias/motorola', motorolaController.motorola);
const xiaomiController = require('../controllers/xiaomiController');
router.get('/categorias/xiaomi', xiaomiController.xiaomi);

//págin perfil
const perfilController = require('../controllers/perfilController');
router.get('/perfil', perfilController.perfil);
const meuCadastroController = require('../controllers/meuCadastroController');
router.get('/perfil/meuCadastro', meuCadastroController.meuCadastro);

module.exports = router;
