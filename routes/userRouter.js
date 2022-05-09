const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register',userController.userRegister);

module.exports = router;