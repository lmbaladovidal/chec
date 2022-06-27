const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');



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
router.get('/productCreate/', authMiddleware,productController.productCreatePage);
router.post('/productAdmin/', authMiddleware , upload.single('product-image'), productController.productCreate);
router.get('/pack', productController.productPack);
router.get('/productCart', productController.productCart);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);
router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',authMiddleware,productController.productAdmin);
router.put('/productAdmin/:id',authMiddleware, upload.single('product-image'), productController.productUpdate);
router.delete('/:id',productController.productDelete);



module.exports = router;
