const { response } = require('express');
const fs = require('fs');
const path = require('path');
const cervezasFilePath = path.join(__dirname, '../DataBase/products/BDCervezas.json');
const cervezas = JSON.parse(fs.readFileSync(cervezasFilePath,"utf-8"));
const db = require('../DataBase/models')

const productPage = (req,res)=>{
        const userLogged = req.session.userLogged;
        db.Product.findAll()
        .then(resultado=>{
            const cervezas = resultado
            const datos ={cervezas,userLogged}
            res.render('./product/productPage',{datos})
            }
        )
        .catch(error=>{console.log(error)})
    }


const productCart=(req,res)=>{
   // console.log(db);
    db.Sale.findAll(). then(response => { res.render('./product/productCart')} ) 
   }
const productDetail=(req,res)=>{res.render('./product/productDetail',cervezas[req.params.id])}

const productAdmin=(req,res)=>{

    let id= parseInt(req.params.id);
    let cervezaToEdit = cervezas.find(cerveza => {
        return cerveza.id == id
    }); 
    if(cervezaToEdit==undefined)  {
        res.render('enDesarrollo')
    } else{
    res.render('product/productAdmin',{cervezaToEdit})}
}
    
const productCreate=(req,res)=>{

    cerveza = {
        id: cervezas[cervezas.length-1].id+1,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        bitterness: req.body.bitterness,
        color: req.body.color,
        alcohol: req.body.alcohol,
        body: req.body.body,
        carbonation: req.body.carbonation,
        hop: req.body.hop,
        image:req.file.filename,
        category : req.body.category
      }
    cervezas.push(cerveza);
    let cervezas_JSON= JSON.stringify(cervezas, null, 2);
    let cervezasPath= path.join(__dirname, '../DataBase/products/BDCervezas.json');
    fs.writeFileSync(cervezasPath, cervezas_JSON);
    res.redirect('/product/productPage')
}
    
const productUpdate = (req, res) =>{
    let id = parseInt(req.params.id);
    cervezas.forEach(product =>{
            if(product.id == id){            
                product.name = req.body.name;
                product.description = req.body.description;
                product.price = req.body.price;
                product.bitterness = req.body.bitterness;
                product.color = req.body.color;
                product.alcohol = req.body.alcohol;
                product.carbonation = req.body.carbonation;
                product.hop = req.body.hop;
                product.category = req.body.category;
                product.image = req.file?req.file.filename:req.body.image;                    
            }
            
        })       
        
    let cervezas_JSON= JSON.stringify(cervezas, null, 2);
    
    let cervezasPath= path.join(__dirname, '../DataBase/products/BDCervezas.json');
    fs.writeFileSync(cervezasPath, cervezas_JSON);
    res.redirect('/product/productPage')
    
}
const productSearch=(req,res)=>{
        let search = req.query.search
        let result = cervezas.filter((cerveza)=>{return cerveza.name.includes(search.toUpperCase())})
        result.unshift([])
        res.render('./product/productSearch',{cervezas:result})}

const productPack=(req,res)=>{res.render('./product/pack')}


function recargar () {
    window.location.href = window.location.href;
}
const productDelete = (req, res) => {
    let id = parseInt(req.params.id);
    
    let nonDeletedCervezas = cervezas.filter(cerveza=>cerveza.id!==id);
    let cervezas_JSON = JSON.stringify(nonDeletedCervezas, null, 2);   
    let cervezasPath= path.join(__dirname, '../DataBase/products/BDCervezas.json');
    fs.writeFileSync(cervezasPath, cervezas_JSON);
    res.redirect('/product/productPage');
}




const productControler = {
    productPage,
    productCart,
    productDetail,
    productAdmin,
    productUpdate,
    productSearch,
    productPack,
    productCreate,
    productDelete,
       
    cervezas:cervezas
}

module.exports=productControler;