const productControler = {
    productPage:(req,res)=>{res.render('./product/productPage')},
    productCart:(req,res)=>{res.render('./product/productCart')},
    productDetail:(req,res)=>{res.render('./product/productDetail')},
    productPack:(req,res)=>{res.render('./product/pack')}
}

module.exports=productControler;