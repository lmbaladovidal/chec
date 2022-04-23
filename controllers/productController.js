
const type = require('../model/bbddCerveza')

const productPage = (req,res)=>{res.render('./product/productPage',{type:type})}
const productCart=(req,res)=>{res.render('./product/productCart')}
const productDetail=(req,res)=>{res.render('./product/productDetail',type[req.params.id])}
const productAdmin=(req,res)=>{res.render('./product/productAdmin',type[req.params.id])}
const productSearch=(req,res)=>{
        let search = req.query.search
        let result = type.filter((cerveza)=>{return cerveza.nombre.includes(search.toUpperCase())})
        res.render('./product/productSearch',{type:result})}
const productPack=(req,res)=>{res.render('./product/pack')}
const productCreate=(req,res)=>{res.render('./product/productAdmin',type[0])
}


const productControler = {
    productPage,
    productCart,
    productDetail,
    productAdmin,
    productSearch,
    productPack,
    productCreate,    
    type:type
}

module.exports=productControler;