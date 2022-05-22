<<<<<<< HEAD
const express = require('express');
const { home } = require('../controllers/homeController');
const router = express.Router();
const homeController = require('../controllers/homeController')
const produtoController = require('../controllers/produtoController')

=======
var express = require('express');
const { home } = require('../controllers/homeController');
var router = express.Router();
var homeController = require('../controllers/homeController')
>>>>>>> c3d667ea2498fddb195ee8a035367345b325a317

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', homeController.home)

<<<<<<< HEAD
router.get('/produto', produtoController.produto)

=======
>>>>>>> c3d667ea2498fddb195ee8a035367345b325a317
module.exports = router;
