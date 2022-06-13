const express = require('express');
const router = express.Router();
const path = require('path');
const nuestrasRecetasController = require('../controllers/nuestrasRecetasController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/nuestrasRecetas', nuestrasRecetasController.recetasDetail);

router.get('/nuestrasRecetasAdmin/',authMiddleware,nuestrasRecetasController.recetaCreate);
router.post('/nuestrasRecetasAdmin/',authMiddleware, nuestrasRecetasController.recetaCreate);
router.get('/nuestrasRecetasAdmin/:id',authMiddleware,nuestrasRecetasController.recetaAdmin);
router.put('/nuestrasRecetasAdmin/:id', authMiddleware,  nuestrasRecetasController.recetaUpdate);
router.delete('/nuestrasRecetasAdmin/:id', authMiddleware,nuestrasRecetasController.recetaDelete);

module.exports = router;

