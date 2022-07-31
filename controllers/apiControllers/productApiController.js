const { response } = require('express');
const { Op,QueryTypes } = require("sequelize");
const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require('../../DataBase/models');
const { sequelize } = require('../../DataBase/models');
const Product = db.Products;
const Categories = db.Categories;

const productList=  (req,res)=>{
        res.set('Access-Control-Allow-Origin', '*');
        const userLogged = req.session.userLogged;
        Product.findAll({
            attributes: ['id', 'name','description','category','description','image']
        })
        .then(async resultado=>{
            const cervezas = resultado
            const datos ={cervezas}
            const countByCategory = await sequelize.query("SELECT c.description, COUNT(category) as cantCategories  FROM products p INNER JOIN categories c  ON c.id = p.category GROUP BY category ORDER BY category", { type: QueryTypes.SELECT })
            res.status(200).json({
                            meta:{status:200, link: "http://localhost:3001/api/product/productList/" },
                            count:cervezas.length,
                            countByCategory:countByCategory,
                            data:{
                                    cervezas:cervezas,
                                    userLogged:userLogged} })
            }
        )
        .catch(error=>{console.log(error)})
    }

const productCart=(req,res)=>{
    db.Sale.findAll().then(response => { res.render('./product/productCart')} ) //coregir esto, debe estar implementado con findOne
}

const productDetail= async (req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    const product = await Product.findOne({ 
        where:{id:req.params.id}
    });
    res.status(200).json({
        meta:{status:200, link: "http://localhost:3001/api/product/productList/" + product.id },
        data:product})
}

const productAdmin=async (req,res)=>{
    let cervezaToEdit = await Product.findOne({
        where:{id:req.params.id}
    }); 
    if(cervezaToEdit==undefined)  {
        res.render('enDesarrollo')
    }else{
        res.status(200).json({data:cervezaToEdit,status:200})}
}
    
const productCreatePage = (req,res)=>{
        res.status(200).json({ 
        data:{
            view:"productCreatePage"
        },
        status:200
        }
    )}

const productCreate= async (req,res)=>{//esta solo funcionaria en postman si hubiese errores de validacion
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.status(200).json({ 
        data:{
            errors: resultValidation.mapped(),
            oldData: req.body,
        },
        status:200
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
        return res.status(200).json({
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
        return res.status(200).json({data:datos,status:200})}

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

// const category = async (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     const categories = await Categories.findAll();
    
//     res.status(200).json({data:categories,
//                           status:200})


// }

const productControler = {
    productList,
    productCart,
    productDetail,
    productAdmin,
    productUpdate,
    productSearch,
    productPack,
    productCreate,
    productCreatePage,
    productDelete,
}

module.exports=productControler;