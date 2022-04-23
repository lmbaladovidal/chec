const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/mainController.js')

router.get('/', controllerMain.index);
router.get('/quienesSomos', controllerMain.quienesSomos);
router.get('/enDesarrollo', controllerMain.enDesarrollo);


module.exports = router;
