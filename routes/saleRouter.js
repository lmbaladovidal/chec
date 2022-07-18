<<<<<<< HEAD
const express = require('express');
const router = express.Router();
//const path = require('path');
const salesController = require('../controllers/saleController');
//const guestMiddleware = require('../middlewares/guestMiddleware');
//const authMiddleware = require('../middlewares/authMiddleware');

//router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);
//router.get('/sales/add',authMiddleware, salesController.add);


router.get('/productCart',  salesController.list);
router.get('/addShipingCart/:id', salesController.addShopingCart);
router.post('/productCart', salesController.createShopingCart);
router.delete('/productCart', salesController.deleteShoppingCart);

module.exports = router;
=======
const express = require('express');
const router = express.Router();
//const path = require('path');
const salesController = require('../controllers/saleController');
//const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);
//router.get('/sales/add',authMiddleware, salesController.add);


router.get('/productCart', authMiddleware, salesController.list);
router.get('/addShipingCart/:id', salesController.addShopingCart);
router.post('/productCart', salesController.createShopingCart);
router.delete('/productCart', salesController.deleteShoppingCart);

module.exports = router;
>>>>>>> b7e454b6aeaef5944f2341d1e21f31e81be91ddf
