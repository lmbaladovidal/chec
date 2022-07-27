const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productApiController = require('../../controllers/apiControllers/productApiController');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
const { body, validationResult, check } = require('express-validator'); // Requerir la función body de express validator (funciona como check)


const validations = [
    body('name').notEmpty().withMessage('El campo nombre es obligatorio').bail()
        .isLength({min:3}).withMessage('Minimo 3 caracteres'),
    body('description').notEmpty().withMessage('El campo descripcion es obligatorio').bail()
        .isLength({min:3}).withMessage('Minimo 3 caracteres'),
	body('bitterness').notEmpty().withMessage('El campo amargor es obligatorio').bail() //bail corta la validación si está vacío
		.isNumeric().withMessage('El amargor solo puede tener valores numericos'),
	body('alcohol').notEmpty().withMessage('Debes indicar la gradacion').bail()
        .isNumeric("La graduacion de alcohol solo puede ser numerica"),
	body('color').notEmpty().withMessage('Se debe indicar el SRM').bail()
        .isNumeric().withMessage('El color debe ser un valor numerico'),
	body('hop').notEmpty().withMessage('El campo lupulo es obligatorio').bail()
        .isLength({min:3}).withMessage('Minimo 3 caracteres'),
	body('carbonation').notEmpty().withMessage('Debes indicar la gasificacion').bail()
        .isLength({min:3}).withMessage('Minimo 3 caracteres'),
    body('price').notEmpty().withMessage('Se debe indicar el precio').bail()
        .isNumeric().withMessage('Solo se admiten números'),
	body('productImage').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];		
		if (file) {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		} 
		return true;
	})
];

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req,file,cb) => {
        cb(null, 'beer' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

router.get('/productAdmin',productApiController.productCreate);
router.get('/productCreate', productApiController.productCreatePage);
router.get('/pack', productApiController.productPack);//no implementado
router.get('/search/',productApiController.productSearch);
router.get('/productPage', productApiController.productPage);
router.post('/productAdmin' , upload.single('product-image'),validations, productApiController.productCreate);

router.get('/productDetail/:id', productApiController.productDetail);
router.get('/productAdmin/:id',productApiController.productAdmin);
router.put('/productAdmin/:id', upload.single('product-image'), validations, productApiController.productUpdate);
router.delete('/:id',productApiController.productDelete);



module.exports = router;
