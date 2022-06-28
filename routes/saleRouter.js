const express = require('express');
const router = express.Router();
//const path = require('path');
const salesController = require('../controllers/saleController');
//const guestMiddleware = require('../middlewares/guestMiddleware');
//const authMiddleware = require('../middlewares/authMiddleware');

//router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);
//router.get('/sales/add',authMiddleware, salesController.add);

//router.get('/nuestrasRecetasAdmin/',authMiddleware,nuestrasRecetasController.recetaCreate);
router.post('/create', salesController.create);
router.put('/create', salesController.create);
router.put('/addShipingCart/:id', salesController.confirmShopingCart);

//router.get('/nuestrasRecetasAdmin/:id',authMiddleware,nuestrasRecetasController.recetaAdmin);
//router.put('/nuestrasRecetasAdmin/:id', authMiddleware,  nuestrasRecetasController.recetaUpdate);
//router.delete('/nuestrasRecetasAdmin/:id', authMiddleware,nuestrasRecetasController.recetaDelete);

module.exports = router;
