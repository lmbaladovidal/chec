const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',productController.productAdmin);
router.put('/productAdmin/:id',productController.productUpdate);
router.delete('/:id',productController.productDelete);
router.get('/productAdmin/',productController.productCreate);
router.get('/pack', productController.productPack);
router.get('/productCart', productController.productCart);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);

module.exports = router;
