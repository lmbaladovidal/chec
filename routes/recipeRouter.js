const express = require('express');
const router = express.Router();
const path = require('path');
const recipeController = require('../controllers/recipeController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/nuestrasRecetas', recipeController.recetasDetail);
router.get('/nuestrasRecetasAdmin/',authMiddleware,recipeController.recetaCreate);
router.post('/nuestrasRecetasAdmin/',authMiddleware, recipeController.recetaCreate);
router.get('/nuestrasRecetasAdmin/:id',authMiddleware,recipeController.recetaAdmin);
router.put('/nuestrasRecetasAdmin/:id', authMiddleware,  recipeController.recetaUpdate);
// router.delete('/nuestrasRecetasAdmin/:id', authMiddleware,recipeController.recetaDelete);

module.exports = router;

