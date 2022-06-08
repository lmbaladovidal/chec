const express = require('express');
const router = express.Router();
const path = require('path');
const nuestrasRecetasController = require('../controllers/nuestrasRecetasController');

router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);

router.get('/recetasAdmin',nuestrasRecetasController.recetaCreate);
router.post('/recetasAdmin', nuestrasRecetasController.recetaCreate);
router.get('/recetasAdmin/:id',nuestrasRecetasController.recetaAdmin);
router.put('/recetasAdmin/:id',  nuestrasRecetasController.recetaUpdate);
router.delete('recetasAdmin/:id',nuestrasRecetasController.recetaDelete);



module.exports = router;