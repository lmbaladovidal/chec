const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.get('/pack', productController.productPack);
router.get('/productCart', productController.productCart);
router.get('/productDetail', productController.productDetail);
router.get('/productPage', productController.productPage);

module.exports = router;