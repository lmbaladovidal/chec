const express = require('express');
const router = express.Router();
const path = require('path');
const recipeController = require('../controllers/recipeController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/nuestrasRecetas', recipeController.recetasDetail);
router.get('/nuevaReceta/',authMiddleware,recipeController.recetaNew);
router.post('/nuevaReceta/',authMiddleware, recipeController.recetaCreate);
router.get('/recetasAdmin/:id',authMiddleware,recipeController.recetaEdit);
router.put('/recetasAdmin/:id', authMiddleware,  recipeController.recetaUpdate);
router.delete('/recetasAdmin/:id', authMiddleware,recipeController.recetaDelete);

module.exports = router;

