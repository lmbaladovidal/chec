<<<<<<< HEAD
const { response } = require('express');
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');
const db = require('../DataBase/models')
const Product = db.Products;


const productPage = (req,res)=>{
        const userLogged = req.session.userLogged;
        Product.findAll()
        .then(resultado=>{
            const cervezas = resultado
            const datos ={cervezas,userLogged}
            res.render('./product/productPage',{datos})
            }
        )
        .catch(error=>{console.log(error)})
    }

const productCart=(req,res)=>{
    db.Sale.findAll().then(response => { res.render('./product/productCart')} ) //coregir esto, debe estar implementado con findOne
}

const productDetail= async (req,res)=>{
    const product = await Product.findOne({ 
        where:{id:req.params.id}
    });
    res.render('./product/productDetail',{product})
}

const productAdmin=async (req,res)=>{
    let cervezaToEdit = await Product.findOne({
        where:{id:req.params.id}
    }); 
    if(cervezaToEdit==undefined)  {
        res.render('enDesarrollo')
    }else{
    res.render('product/productAdmin',{cervezaToEdit})}
}
    
const productCreatePage = (req,res)=>{res.render('product/productCreate')}

const productCreate= async (req,res)=>{
    await Product.create({
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
      })
    res.redirect('/product/productPage')
}
    
const productUpdate = async (req, res) =>{
    let id = parseInt(req.params.id);
    const cerveza = await Product.findOne({
        where:{id:req.params.id}
    }); 
    cerveza.set({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        bitterness: req.body.bitterness,
        color: req.body.color,
        alcohol: req.body.alcohol,
        carbonation: req.body.carbonation,
        hop: req.body.hop,
        category: req.body.category,
        image: req.file?req.file.filename:req.body.image
    })
    await cerveza.save();                
    res.redirect('/product/productPage')
    
}
const productSearch=async (req,res)=>{
        let search = req.query.search
        const cervezas = await Product.findAll({
            where:{  
                name:{
                    [Op.substring]: search
                }
            }
        })
        datos = {cervezas,userLogged:"userlogged va aca"}
        res.render('./product/productSearch',{datos})}

const productPack=(req,res)=>{res.render('./product/pack')}


function recargar () {
    window.location.href = window.location.href;
}

const productDelete = async (req, res) => {
    let id = parseInt(req.params.id);    
    const cerveza = await Product.findOne({
        where:{id:req.params.id}
    });
    await cerveza.destroy()
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
    productCreatePage,
    productDelete
}

=======
const { response } = require('express');
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require('../DataBase/models')
const Product = db.Products;


const productPage = (req,res)=>{
        const userLogged = req.session.userLogged;
     //   console.log(userLogged)
        Product.findAll()
        .then(resultado=>{
            const cervezas = resultado
            const datos ={cervezas,userLogged}
            res.render('./product/productPage',{datos})
            }
        )
        .catch(error=>{console.log(error)})
    }

const productCart=(req,res)=>{
    db.Sale.findAll().then(response => { res.render('./product/productCart')} ) //coregir esto, debe estar implementado con findOne
}

const productDetail= async (req,res)=>{
    const product = await Product.findOne({ 
        where:{id:req.params.id}
    });
    res.render('./product/productDetail',{product})
}

const productAdmin=async (req,res)=>{
    let cervezaToEdit = await Product.findOne({
        where:{id:req.params.id}
    }); 
    if(cervezaToEdit==undefined)  {
        res.render('enDesarrollo')
    }else{
    res.render('product/productAdmin',{cervezaToEdit})}
}
    
const productCreatePage = (req,res)=>{res.render('product/productCreate')}

const productCreate= async (req,res)=>{
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./product/productCreate", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    
    await Product.create({
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
      })
    res.redirect('/product/productPage')
}
    
const productUpdate = async (req, res) =>{
    const resultValidation = validationResult(req);
    let cervezaToEdit = {...req.body,id:req.params.id}
    if (resultValidation.errors.length > 0) {
        return res.render("./product/productAdmin", {
            cervezaToEdit,
            errors: resultValidation.mapped(),
            oldData: req.body,
        });
    }
   
    const cerveza = await Product.findOne({
        where:{id:req.params.id}
    }); 
    cerveza.set({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        bitterness: req.body.bitterness,
        color: req.body.color,
        alcohol: req.body.alcohol,
        carbonation: req.body.carbonation,
        hop: req.body.hop,
        category: req.body.category,
        image: req.file?req.file.filename:req.body.image
    })
    await cerveza.save();                
    res.redirect('/product/productPage')
    
}
const productSearch=async (req,res)=>{
        let search = req.query.search
        const cervezas = await Product.findAll({
            where:{  
                name:{
                    [Op.substring]: search
                }
            }
        })
        datos = {cervezas,userLogged:"userlogged va aca"}
        res.render('./product/productSearch',{datos})}

const productPack=(req,res)=>{res.render('./product/pack')}


function recargar () {
    window.location.href = window.location.href;
}

const productDelete = async (req, res) => {
    let id = parseInt(req.params.id);    
    const cerveza = await Product.findOne({
        where:{id:req.params.id}
    });
    await cerveza.destroy()
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
    productCreatePage,
    productDelete
}

>>>>>>> b7e454b6aeaef5944f2341d1e21f31e81be91ddf
module.exports=productControler;