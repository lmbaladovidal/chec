const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/mainController.js')

router.get('/', controllerMain.index);
router.get('/quienesSomos', controllerMain.quienesSomos);
router.get('/enDesarrollo', controllerMain.enDesarrollo);
router.get('/login', controllerMain.login);
router.get('/pack', controllerMain.pack);
router.get('/productCart', controllerMain.productCart);
router.get('/productDetail', controllerMain.productDetail);
router.get('/productPage', controllerMain.productPage);
router.get('/register', controllerMain.register);

module.exports = router;
