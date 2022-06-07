const express = require('express');
const router = express.Router();
const path = require('path');
const nuestrasRecetasController = require('../controllers/nuestrasRecetasController');

router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);

router.get('/nuestrasRecetasAdmin/',nuestrasRecetasController.recetaCreate);
router.post('/nuestrasRecetasAdmin/', nuestrasRecetasController.recetaCreate);
router.get('/nuestrasRecetasAdmin/:id',nuestrasRecetasController.recetaAdmin);
router.put('/nuestrasRecetasAdmin/:id',  nuestrasRecetasController.recetaUpdate);
router.delete('/nuestrasRecetasAdmin/:id',nuestrasRecetasController.recetaDelete);

module.exports = router;

