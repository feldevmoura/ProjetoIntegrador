const express = require('express');
const { home } = require('../controllers/homeController');
const router = express.Router();
const homeController = require('../controllers/homeController')
const produtoController = require('../controllers/produtoController')


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', homeController.home)

router.get('/produto', produtoController.produto)

module.exports = router;
