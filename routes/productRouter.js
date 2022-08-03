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

const storage = multer.diskStorage({      // [2-MULTER]  Crear el storage
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {

		const fileDefault = 'https://res.cloudinary.com/ds0upcco9/image/upload/v1659118673/images/avatars/default_img_wmlytg.png'
	    const filetypes = /jpeg|jpg|png|gif/;
		
		const fileExtension=path.extname(file.originalname).toLowerCase();
	console.log(fileExtension);	
	console.log(req.file); 
		const extname = filetypes.test(fileExtension);
		const mimetype = filetypes.test(file.mimetype);
	console.log(mimetype);
	console.log(extname);
		if(req.file == undefined){
			fileName = `${fileDefault}`; 
			//fileName = `${Date.now()}_img${fileDefault}`; 			
			cb(null, fileName);
		} else 				
		if (mimetype && extname){
			fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
			cb(null, fileName);
		  } 
	}
})

const upload = multer({storage});

router.get('/productAdmin/', authMiddleware,productController.productCreate);
router.get('/productCreate/', authMiddleware, productController.productCreatePage);
router.get('/pack', productController.productPack);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);
router.post('/productAdmin/', authMiddleware , upload.single('product-image'),validations, productController.productCreate);

router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',authMiddleware,productController.productAdmin);
router.put('/productAdmin/:id',authMiddleware, upload.single('product-image'), validations, productController.productUpdate);
router.delete('/:id',productController.productDelete);



module.exports = router;
