const express = require('express');
const userApiController = require('../../controllers/apiControllers/userApiController');
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
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
const userLoggedMiddleware =require('../../middlewares/userLoggedMiddleware')

// Validation para express-validator
const validations = [
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
			const ageUser2=ageUser
			if(ageUser2 > 18) {
				return true
				//throw new Error("Debes ser mayor de 18 años")
			}
		}),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('passVerify').notEmpty().withMessage('Repite tu contraseña').bail()
		.custom((value,{req}) => {
			if(value !== req.body.password){
				throw new Error('Las contraseñas no coinciden')
			}
			return true}),
	body('avatar').custom((file, { req }) => {       //custom validation xq no hay una validación para files. 
	//console.log(req.file + " soy el req.file");	
		let fileAvatarExtension
			if(req.file == undefined){
				fileAvatarExtension = ".png"
			} else {
				fileAvatarExtension = path.extname(req.file.originalname).toLowerCase()
			}

		console.log(fileAvatarExtension +" pase el Primer IF linea 88");
			
			const filetypes = /jpeg|jpg|png|gif/; // Allowed ext
			const extname = filetypes.test(fileAvatarExtension); // Check ext
			//const mimetype = filetypes.test(req.file.mimetype);// Check mime

			if(!extname){
				throw new Error('Solo Formatos jpeg-jpg-png-gif');
  			} else  {
				return true
			}
	})
];

const validationsProfile = [
    body('name').notEmpty().withMessage('Tienes que escribir tu nombre').bail()
		.isLength({min:2}).withMessage("Mínimo 3 caracteres."),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido').bail()
		.isLength({min:2}).withMessage("Mínimo 3 caracteres."),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail() //bail corta la validación si está vacío
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('address').notEmpty().withMessage('Tienes que escribir tu dirección'),
	body('birthDate').notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento').bail()
	.custom((value, {req}) => {			
		const m = moment(value, "YYYY-MM-DD");
		const ageUser= parseInt(m.fromNow());
		const ageUser2=ageUser
		if(ageUser2 > 18) {
			return true
			//throw new Error("Debes ser mayor de 18 años")
		}
	}),
	body('avatar').custom((value, { req }) => {       //custom validation xq no hay una validación para files. 
		let fileAvatarExtension
			if(req.file == undefined){
				fileAvatarExtension = ".png"
			} else {
				fileAvatarExtension = path.extname(req.file.originalname).toLowerCase()
			}

		console.log(fileAvatarExtension +" pase el Primer IF linea 88");
			
			const filetypes = /jpeg|jpg|png|gif/; // Allowed ext
			const extname = filetypes.test(fileAvatarExtension); // Check ext
			//const mimetype = filetypes.test(req.file.mimetype);// Check mime

			if(!extname){
				throw new Error('Solo Formatos jpeg-jpg-png-gif');
  			} else  {
				return true
			}
	})
	
];

//----RUTAS DE SITIO---------//

router.get('/login',guestMiddleware, userApiController.login);
router.get('/logout/', userApiController.logout);
router.get('/register', guestMiddleware, userApiController.register);
router.get('/profile', userLoggedMiddleware ,  userApiController.profile);
router.get('/profile/:id', userApiController.editProfile)
router.post('/register', uploadFile.single('avatar'),validations, userApiController.userRegister);
// router.post('/login', userController.loginProcess);
// router.put('/profile/:id', authMiddleware, uploadFile.single('avatar'), validationsProfile, userController.updateProfile)
router.delete('/profile/:id', authMiddleware, userApiController.deleteProfile)

module.exports = router;