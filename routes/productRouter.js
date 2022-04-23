const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.get('/pack', productController.productPack);
router.get('/productCart', productController.productCart);
router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',productController.productAdmin);
router.get('/productAdmin/',productController.productCreate);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);

module.exports = router;
