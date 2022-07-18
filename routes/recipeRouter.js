<<<<<<< HEAD
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

=======
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
    body('name').notEmpty().withMessage(' Ingresá el nombre de la receta. ').bail()
        .isLength({ min: 3 }).withMessage(" Ingresá mínimo 3 caracteres. "),
    body('volume').notEmpty().withMessage(' Ingresá el volumen. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
	body('boilvolume').notEmpty().withMessage(' Ingresá el volumen de hervor. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('boilTime').notEmpty().withMessage(' Ingresá el tiempo de hervor. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('alcohol').notEmpty().withMessage(' Ingresá el porcentaje de alcohol. ')
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('targetFG').notEmpty().withMessage(' Ingresá la densidad final. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('targetOG').notEmpty().withMessage(' Ingresá la densidad original. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('initialPH').notEmpty().withMessage(' Ingresá el PH inicial. ').bail()
      .isNumeric().withMessage(' Solo se admiten números. '),
    body('finalPH').notEmpty().withMessage(' Ingresá el PH final. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('mashTemp').notEmpty().withMessage(' Ingresá la temperatura de maceración. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('mashTime').notEmpty().withMessage(' Ingresá el tiempo de maceración. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('fermentationTemp').notEmpty().withMessage(' Ingresá el tiempo de maceración. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('malt1').notEmpty().withMessage(' Ingresá el tipo de malta. ').bail()
        .isString().withMessage(' Solo se admiten letras. '),
    body('malt1Amount').notEmpty().withMessage(' Ingresá la cantidad de malta. ').bail()
        .isNumeric().withMessage('Solo se admiten números'),
    body('hop1').notEmpty().withMessage('Ingresá el lúpulo').bail()
        .isString().withMessage(' Solo se admiten letras. '),
    body('hop1Amount').notEmpty().withMessage(' Ingresá la cantidad de lúpulo. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. '),
    body('hop1Moment').notEmpty().withMessage(' Ingresá el momento de adición. ').bail()
        .isString().withMessage(' Se admiten letras y números. '),
    body('yeast').notEmpty().withMessage(' Ingresá la levadura. ').bail()
        .isString().withMessage(' Se admiten letras y números. '),
    body('yeastAmount').notEmpty().withMessage(' Ingresá la cantidad de levadura por litro. ').bail()
        .isNumeric().withMessage(' Solo se admiten números. ')

];

router.get('/nuestrasRecetas', recipeController.recetasDetail);
router.get('/nuevaReceta/',authMiddleware, recipeController.recetaNew);
router.post('/nuevaReceta/',authMiddleware, validations, recipeController.recetaCreate);

router.get('/recetasAdmin/:id',authMiddleware,recipeController.recetaEdit);
router.put('/recetasAdmin/:id', authMiddleware, validations, recipeController.recetaUpdate);

router.delete('/:id', authMiddleware,recipeController.recetaDelete);

module.exports = router;

>>>>>>> b7e454b6aeaef5944f2341d1e21f31e81be91ddf
