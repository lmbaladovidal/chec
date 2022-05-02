const fs = require('fs');
const path = require('path');
const cervezasFilePath = path.join(__dirname, '../DataBase/BDCervezas.json');
const cervezas = JSON.parse(fs.readFileSync(cervezasFilePath,"utf-8"));

const productPage = (req,res)=>{res.render('./product/productPage',{cervezas:cervezas})}
const productCart=(req,res)=>{res.render('./product/productCart')}
const productDetail=(req,res)=>{res.render('./product/productDetail',cervezas[req.params.id])}
const productAdmin=(req,res)=>{
    let id= parseInt(req.params.id);
    let cervezaToEdit = cervezas.find(cerveza => {
        return cerveza.id == id
    });
    console.log(cervezaToEdit)
    res.render('./product/productAdmin',{cervezaToEdit:cervezaToEdit})
}
    
    
const productUpdate = (req, res) =>{
    let id = parseInt(req.params.id);
    cervezas.forEach(product =>{
        if(product.id == id){
            product.name = req.body.name?req.body.name:product.name;
            product.description = req.body.description?req.body.description:product.description;
            product.price = req.body.price?req.body.price:product.price;
            product.bitterness = req.body.bitterness?req.body.bitterness:product.bitterness;
            product.color = req.body.color?req.body.color:product.color;
            product.alcohol = req.body.alcohol?req.body.alcohol:product.alcohol;
            product.carbonation = req.body.carbonation?req.body.carbonation:product.carbonation;
            product.hop = req.body.hop?req.body.hop:product.hop;
        }
        })
    let productEdited= JSON.stringify(cervezas, null, 2);
    let cervezasEditedPath= path.join(__dirname, '../DataBase/BDCervezas.json');
    fs.writeFileSync(cervezasEditedPath, productEdited);
    res.redirect('/productPage')
    
}
const productSearch=(req,res)=>{
        let search = req.query.search
        let result = cervezas.filter((cerveza)=>{return cerveza.nombre.includes(search.toUpperCase())})
        res.render('./product/productSearch',{cervezas:result})}
const productPack=(req,res)=>{res.render('./product/pack')}
const productCreate=(req,res)=>{res.render('./product/productAdmin',cervezas[0])

}


const productControler = {
    productPage,
    productCart,
    productDetail,
    productAdmin,
    productSearch,
    productPack,
    productCreate, 
    productUpdate,   
    cervezas:cervezas
}

module.exports=productControler;