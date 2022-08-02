<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/mainController.js')

router.get('/', controllerMain.index);
router.get('/quienesSomos', controllerMain.quienesSomos);
router.get('/enDesarrollo', controllerMain.enDesarrollo);
//router.get('/nuestrasRecetas', controllerMain.recetas);


module.exports = router;

=======
const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/mainController.js')

router.get('/', controllerMain.index);
router.get('/quienesSomos', controllerMain.quienesSomos);
router.get('/enDesarrollo', controllerMain.enDesarrollo);



module.exports = router;

>>>>>>> 9049a2979f14a8ef7f32c689f86e514b5e9714f6
