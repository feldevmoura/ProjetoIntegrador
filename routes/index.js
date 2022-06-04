const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const produtoController = require('../controllers/produtoController');
const categoriasController = require('../controllers/categoriasController');
const entrarController = require('../controllers/entrarController');
const loginController = require('../controllers/loginController')


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', homeController.home);
router.get('/home', homeController.home);
router.post('/login', loginController.login);


router.get('/produto', produtoController.produto);

router.get('/categorias', categoriasController.categorias);

router.get('/entrar', entrarController.entrar);

module.exports = router;
