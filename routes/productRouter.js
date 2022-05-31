const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');


const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req,file,cb) => {
        cb(null, 'beer' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

router.get('/productDetail/:id', productController.productDetail);
router.get('/productAdmin/:id',productController.productAdmin);
router.put('/productAdmin/:id', upload.single('product-image'), productController.productUpdate);
router.delete('/:id',productController.productDelete);
router.post('/productAdmin/', upload.single('product-image'), productController.productCreate);
router.get('/productAdmin/',productController.productCreate);
router.get('/pack', productController.productPack);
router.get('/productCart', productController.productCart);
router.get('/search/',productController.productSearch);
router.get('/productPage', productController.productPage);


module.exports = router;
