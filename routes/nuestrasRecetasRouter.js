const express = require('express');
const router = express.Router();
const path = require('path');
const nuestrasRecetasController = require('../controllers/nuestrasRecetasController');

router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);

router.get('/nuestrasRecetasAdmin/',nuestrasRecetasController.recetaCreate);
router.post('/nuestrasRecetasAdmin/', nuestrasRecetasController.recetaCreate);
router.get('/nuestrasRecetasAdmin/:id',nuestrasRecetasController.recetaAdmin);
router.put('/nuestrasRecetasAdmin/:id',  nuestrasRecetasController.recetaUpdate);
router.delete('nuestrasRecetasAdmin/:id',nuestrasRecetasController.recetaDelete);

module.exports = router;

/*
router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',productController.productAdmin);
router.put('/productAdmin/:id', upload.single('product-image'), productController.productUpdate);
router.delete('/:id',productController.productDelete);
router.post('/productAdmin/', upload.single('product-image'), productController.productCreate);
router.get('/productAdmin/',productController.productCreate);
router.get('/pack', productController.productPack);
router.get('/productCart', productController.productCart);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);
*/