const express = require('express');
const router = express.Router();

//home
const homeController = require('../controllers/homeController');
router.get('/', homeController.home);
router.get('/home', homeController.home);

//página do produto
const produtoController = require('../controllers/produtoController');


//página do cadastro
const cadastroController = require('../controllers/cadastroController');
router.get('/cadastro', cadastroController.cadastro);
router.post('/cadastro', cadastroController.cadastroCompleto);

//página do login
const entrarController = require('../controllers/entrarController');
router.get('/entrar', entrarController.entrar);

//redirect para logar
const loginController = require('../controllers/loginController');
router.post('/login', loginController.login);

//página carrinho
const carrinhoController = require('../controllers/carrinhoController');
router.get('/carrinho', carrinhoController.carrinho);
router.post('/adicionar', carrinhoController.adicionarCarrinho);

//página pedidos
const pedidosController = require('../controllers/pedidosController');
router.get('/perfil/pedidos', pedidosController.pedidos);

//página compra finalizada
const endPurchaseController = require('../controllers/endPurchaseController');
router.get('/comprafinalizada', endPurchaseController.purchase);

//página de categorias
const categoriasController = require('../controllers/categoriasController');
router.get('/categorias', categoriasController.categorias);
const samsungController = require('../controllers/samsungController');
router.get('/categorias/samsung', samsungController.samsung);
router.get('/s22UltraAzul', samsungController.s22UltraAzul);
router.get('/s22UltraBranco', samsungController.s22UltraBranco);
router.get('/s22UltraPreto', samsungController.s22UltraPreto);
router.get('/s22UltraVinho', samsungController.s22UltraVinho);
router.get('/s22PlusPreto', samsungController.s22PlusPreto);
router.get('/s22Preto', samsungController.s22Preto);


const appleController  = require('../Controllers/appleController');
router.get('/categorias/apple', appleController.apple);
router.get('/iphone13ProMaxPreto', appleController.iphone13ProMaxPreto);
router.get('/iphone13ProPreto', appleController.iphone13ProPreto);
router.get('/iphone13MiniAzul', appleController.iphone13MiniAzul);
router.get('/iphone13MiniBranco', appleController.iphone13MiniBranco);
router.get('/iphone13MiniPreto', appleController.iphone13MiniPreto);
router.get('/iphone13MiniRosa', appleController.iphone13MiniRosa);
const motorolaController = require('../controllers/motorolaController');
router.get('/categorias/motorola', motorolaController.motorola);
router.get('/motorolaEdge30ProAzul', motorolaController.motorolaEdge30ProAzul);
router.get('/motorolaEdge30Azul', motorolaController.motorolaEdge30Azul);
router.get('/motorolaEdge20ProAzul', motorolaController.motorolaEdge20ProAzul);


const xiaomiController = require('../controllers/xiaomiController');
router.get('/categorias/xiaomi', xiaomiController.xiaomi);
router.get('/xiaomiMi11Cinza', xiaomiController.xiaomiMi11Cinza)
router.get('/xiaomi12Cinza', xiaomiController.xiaomi12Cinza);
router.get('/xiaomiRedmiNote11Cinza', xiaomiController.xiaomiRedmiNote11Cinza);


//págin perfil
const perfilController = require('../controllers/perfilController');
router.get('/perfil', perfilController.perfil);
const meuCadastroController = require('../controllers/meuCadastroController');
router.get('/perfil/meuCadastro', meuCadastroController.meuCadastro);

module.exports = router;
