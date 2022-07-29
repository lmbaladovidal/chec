const express = require('express');
const router = express.Router();
const saleApiController = require('../../controllers/apiControllers/saleApiController');
const authMiddleware = require('../../middlewares/authMiddleware');


router.get('/salesList',  saleApiController.list);


module.exports = router;