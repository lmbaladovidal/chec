const express = require('express');
const router = express.Router();
//const path = require('path');
const salesController = require('../controllers/saleController');
//const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/productCart', authMiddleware, salesController.list);
router.get('/addShipingCart/:id', salesController.addShopingCart);
router.post('/productCart', salesController.createShopingCart);
router.delete('/productCart', salesController.deleteShoppingCart);

module.exports = router;
