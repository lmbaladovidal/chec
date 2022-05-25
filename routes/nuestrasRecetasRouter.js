const express = require('express');
const router = express.Router();
const path = require('path');
const nuestrasRecetasController = require('../controllers/nuestrasRecetasController');


router.get('/nuestrasRecetas', nuestrasRecetasController.recetas);
//router.get('/nuestrasRecetas/:id', nuestrasRecetasController.recetas);
//router.get('/recetasAdmin/:id',nuestrasRecetasController.recetaAdmin);
//router.put('/recetasAdmin/:id',  nuestrasRecetasController.recetaUpdate);
//router.delete('/:id',nuestrasRecetasController.recetaDelete);
//router.post('/recetaAdmin/', nuestrasRecetasController.recetaCreate);
//router.get('/recetasAdmin/',nuestrasRecetasController.recetaCreate);
//router.get('/search/',nuestrasRecetasController.recetaSearch);
//router.get('/nuestrasRecetas', nuestrasRecetasController.recetaPage);

module.exports = router;