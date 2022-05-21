var express = require('express');
const { home } = require('../controllers/homeController');
var router = express.Router();
var homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', homeController.home)

module.exports = router;
