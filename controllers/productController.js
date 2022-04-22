
const type = require('../model/bbdd')
const productControler = {
    productPage:(req,res)=>{res.render('./product/productPage',{type:type})},
    productCart:(req,res)=>{res.render('./product/productCart')},
    productDetail:(req,res)=>{res.render('./product/productDetail',type[req.params.id])},
    productAdmin:(req,res)=>{res.render('./product/productAdmin',type[req.params.id])},
    productPack:(req,res)=>{res.render('./product/pack')},
    type:type
}

module.exports=productControler;