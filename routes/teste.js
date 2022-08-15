const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();


router.get('/home', homeController.home);

module.exports = router;