const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { body, validationResult, check } = require('express-validator'); // Requerir la función body de express validator (funciona como check)


const validations = [
    body('name').notEmpty().withMessage('El campo nombre es obligatorio').bail()
        .isLength(),
    body('description').notEmpty().withMessage('El campo descripcion es obligatorio').bail()
        .isLength(),
	body('bitterness')
		.notEmpty().withMessage('El campo amargor es obligatorio').bail() //bail corta la validación si está vacío
		.isNumeric().withMessage('El amargor solo puede tener valores numericos'),
	body('alcohol')
        .notEmpty().withMessage('Tienes que escribir tu dirección').bail()
        .isNumeric("La graduacion de alcohol solo puede ser numerica"),
	body('color')
        .notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento').bail()
        .isNumeric().withMessage('El color debe ser un valor numerico'),
	body('hop')
        .notEmpty().withMessage('El campo lupulo es obligatorio').bail()
        .isLength(),
	body('carbonation').notEmpty().withMessage('Repite tu contraseña').bail()
        .isLength(),
    body('price').notEmpty().withMessage('Repite tu contraseña').bail()
        .isNumeric().withMessage(),
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

router.get('/productAdmin/', authMiddleware,productController.productCreate);
router.get('/productCreate/', authMiddleware, productController.productCreatePage);
router.get('/pack', productController.productPack);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);
router.post('/productAdmin/', authMiddleware ,validations, upload.single('product-image'), productController.productCreate);

router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',authMiddleware,productController.productAdmin);
router.put('/productAdmin/:id',authMiddleware, validations, upload.single('product-image'), productController.productUpdate);
router.delete('/:id',productController.productDelete);



module.exports = router;
