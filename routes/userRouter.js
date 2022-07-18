const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const path = require('path');
const { body, validationResult, check } = require('express-validator'); // Requerir la función body de express validator (funciona como check)

//Multer configuration
const multer = require('multer');  // [1-MULTER] Instalar y luego requerir multer + agregar el enctype en form de la vista

const storage = multer.diskStorage({      // [2-MULTER]  Crear el storage
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})
const uploadFile = multer({ storage });  // [3-MULTER] Crear la variable upload para usar el storage

// Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userLoggedMiddleware =require('../middlewares/userLoggedMiddleware')

// Validation para express-validator
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail() //bail corta la validación si está vacío
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('address').notEmpty().withMessage('Tienes que escribir tu dirección'),
	body('birthDate').notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('passVerify').notEmpty().withMessage('Repite tu contraseña').bail()
		.custom((value,{req}) =>{
			if(value !== req.body.password){
				throw new Error('Las contraseñas no coinciden')
			}
			return true}),
	body('avatar').custom((value, { req }) => {       //custom validation xq no hay una validación para files. 
		let file = req.file;                          //Custom val. requiere cb para pasar el campo a validar
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
//Form de login
router.get('/login',guestMiddleware, userController.login);
//Process login
router.post('/login', userController.loginProcess);

//Form de register
router.get('/register', guestMiddleware, userController.register);
// Proces user register
router.post('/register',uploadFile.single('avatar'), validations, userController.userRegister);

//Profile
router.get('/profile', userLoggedMiddleware , authMiddleware,  userController.profile);

router.get('/profile/:id', authMiddleware, userController.editProfile)
router.put('/profile/:id', authMiddleware, uploadFile.single('avatar'),userController.updateProfile)

//Delete
router.delete('/profile/:id', authMiddleware, userController.deleteProfile)

// Logout
router.get('/logout/', userController.logout);

module.exports = router;