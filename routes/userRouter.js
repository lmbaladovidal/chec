const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const path = require('path');
const moment = require('moment');
const { body, validationResult, check } = require('express-validator'); // Requerir la función body de express validator (funciona como check)

//Multer configuration
const multer = require('multer');  // [1-MULTER] Instalar y luego requerir multer + agregar el enctype en form de la vista

const storage = multer.diskStorage({      // [2-MULTER]  Crear el storage
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {

		const fileDefault = '.png'
	    const filetypes = /jpeg|jpg|png|gif/;
		
		const fileExtension=path.extname(file.originalname).toLowerCase();
	console.log(fileExtension);	
	console.log(req.file); 
		const extname = filetypes.test(fileExtension);
		const mimetype = filetypes.test(file.mimetype);
	console.log(mimetype);
	console.log(extname);

		if(req.file == undefined){
			fileName = `${Date.now()}_img${fileDefault}`; 
			cb(null, fileName);

		} else 		
		
		if (mimetype && extname){
			fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
			cb(null, fileName);
		  } 
	}
})
const uploadFile = multer({ storage });  // [3-MULTER] Crear la variable upload para usar el storage

// Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userLoggedMiddleware =require('../middlewares/userLoggedMiddleware')

// Validation para express-validator
const validationsRegister = [
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre').bail()
		.isLength({min:3}).withMessage("Mínimo 3 caracteres."),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido').bail()
		.isLength({min:3}).withMessage("Mínimo 3 caracteres."),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail() //bail corta la validación si está vacío
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('address').notEmpty().withMessage('Tienes que escribir tu dirección'),
	body('birthDate').exists().withMessage('Tienes que escribir tu fecha de nacimiento').bail() 
		.custom((value, {req}) => {			
			const m = moment(value, "YYYY-MM-DD");
			const ageUser= parseInt(m.fromNow());
			ageUser2 > 18?true:false
		}).withMessage('Debes ser mayor de 18 años'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('passVerify').notEmpty().withMessage('Repite tu contraseña').bail()
		.custom((value,{req}) => {
			if(value !== req.body.password){
				throw new Error('Las contraseñas no coinciden')
			}
			return true}),
	body('avatar').custom((file, { req }) => {       //custom validation xq no hay una validación para files. 
		let fileAvatarExtension
			if(req.file == undefined){
				fileAvatarExtension = ".png"
			} else {
				fileAvatarExtension = path.extname(req.file.originalname).toLowerCase()
			}			
			const filetypes = /jpeg|jpg|png|gif/; // Allowed ext
			const extname = filetypes.test(fileAvatarExtension); // Check ext

			if(!extname){
				throw new Error('Solo Formatos jpeg-jpg-png-gif');
  			} else  {
				return true
			}
	})
];

const validationsEditProfile = [
    body('name')
		.notEmpty().withMessage('Tienes que escribir tu nombre').bail()
		.isLength({min:2}).withMessage("Mínimo 2 caracteres.").bail(),
    body('lastName')
		.notEmpty().withMessage('Tienes que escribir tu apellido').bail()
		.isLength({min:2}).withMessage("Mínimo 2 caracteres.").bail(),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail() //bail corta la validación si está vacío
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('address')
		.notEmpty().withMessage('Tienes que escribir tu dirección').bail()
		.isLength({min:8}).withMessage("Mínimo 8 caracteres."),
	body('birthDate')
		.notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento').bail()
		.custom((value, {req}) => {			
			const m = moment(value, "YYYY-MM-DD");
			const ageUser= parseInt(m.fromNow());
			ageUser>18?true:false
		}).withMessage('Debes ser mayor de 18 años'),
	body('oldvatar')
		.custom((value, { req }) => {       //custom validation xq no hay una validación para files. 
			let fileAvatarExtension
			console.log(req.body.oldAvatar);
			if(req.file == undefined){
				fileAvatarExtension = req.body.oldAvatar
			} else {
				fileAvatarExtension = path.extname(req.file.originalname).toLowerCase()
			}
			const filetypes = /jpeg|jpg|png|gif/; // Allowed ext
			const extname = filetypes.test(fileAvatarExtension); // Check ext
			if(!extname){
				throw new Error('Solo Formatos jpeg-jpg-png-gif');
  			} else  {
				return true
			}
		})
	];

//----RUTAS DE SITIO---------//
//Form de login
router.get('/login',guestMiddleware, userController.login);
//Process login
router.post('/login', userController.loginProcess);

//Form de register
router.get('/register', guestMiddleware, userController.register);
// Proces user register
router.post('/register', uploadFile.single('avatar'),validationsRegister, userController.userRegister);

//Profile
router.get('/profile', userLoggedMiddleware , authMiddleware,  userController.profile);

router.get('/profile/:id', authMiddleware, userController.editProfile)
router.put('/profile/:id', authMiddleware, uploadFile.single('avatar'), validationsEditProfile, userController.updateProfile)

//Delete
router.delete('/profile/:id', authMiddleware, userController.deleteProfile)

// Logout
router.get('/logout/', userController.logout);

module.exports = router;