const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
const produtoController = require('../controllers/produtoController')
const categoriasController = require('../controllers/categoriasController')


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', homeController.home)

router.get('/produto', produtoController.produto)

router.get('/categorias', categoriasController.categorias)

module.exports = router;
