
const type = require('../model/bbdd')
const productControler = {
    productPage:(req,res)=>{res.render('./product/productPage',{type:type})},
    productCart:(req,res)=>{res.render('./product/productCart')},
    productDetail:(req,res)=>{res.render('./product/productDetail',type[req.params.id])},
    productAdmin:(req,res)=>{res.render('./product/productAdmin',type[req.params.id])},
    productSearch:(req,res)=>{
        let search = req.query.search
        let result = type.filter((cerveza)=>{return cerveza.nombre.includes(search.toUpperCase())})
        res.render('./product/productSearch',{type:result})},
    productPack:(req,res)=>{res.render('./product/pack')},
    type:type
}

module.exports=productControler;