const express = require('express');
const router = express.Router();
const path = require('path');
const recipeController = require('../controllers/recipeController');
const { body, validationResult, check } = require('express-validator'); // Requerir la función body de express validator (funciona como check)

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userLoggedMiddleware =require('../middlewares/userLoggedMiddleware')


// Validation para express-validator
const validations = [
    body('name').notEmpty().withMessage('Ingresá el nombre de la receta'),
    body('volume').notEmpty().isNumeric().withMessage('Ingresá el volumen.'),
	body('boilvolume').notEmpty().isNumeric().withMessage('Ingresá el volumen de hervor'),
    body('boilTime').notEmpty().isNumeric().withMessage('Ingresá el tiempo de hervor'),
    body('alcohol').notEmpty().isNumeric().withMessage('Ingresá el porcentaje de alcohol'),
    body('targetFG').notEmpty().isNumeric().withMessage('Ingresá la densidad final'),
    body('targetOG').notEmpty().isNumeric().withMessage('Ingresá la densidad original '),
    body('initialPH').notEmpty().isNumeric().withMessage('Ingresá el PH inicial'),
    body('finalPH').notEmpty().isNumeric().withMessage('Ingresá el PH final'),
    body('mashTemp').notEmpty().isNumeric().withMessage('Ingresá la temperatura de maceración'),
    body('mashTime').notEmpty().isNumeric().withMessage('Ingresá el tiempo de maceración'),
    body('malt1').notEmpty().isString().withMessage('Ingresá el tipo de malta'),
    body('malt1Amount').notEmpty().isNumeric().withMessage('Ingresá la cantidad de malta'),
    body('hop1').notEmpty().isString().withMessage('Ingresá el lúpulo'),
    body('hop1Amount').notEmpty().isNumeric().withMessage('Ingresá la cantidad de lúpulo'),
    body('hop1Moment').notEmpty().isString().withMessage('Ingresá el momento de adición'),
    body('yeast').notEmpty().isString().withMessage('Ingresá la levadura'),
    body('yeastAmount').notEmpty().isNumeric().withMessage('Ingresá la cantidad de levadura por litro'),

];

router.get('/nuestrasRecetas', recipeController.recetasDetail);
router.get('/nuevaReceta/',authMiddleware, recipeController.recetaNew);
router.post('/nuevaReceta/',authMiddleware, validations, recipeController.recetaCreate);

router.get('/recetasAdmin/:id',authMiddleware,recipeController.recetaEdit);
router.put('/recetasAdmin/:id', authMiddleware, validations, recipeController.recetaUpdate);

router.delete('/:id', authMiddleware,recipeController.recetaDelete);

module.exports = router;

