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
            attributes: ['id', 'name','description','category','price','image'],
            order:['description']

        })
        .then(async resultado=>{
            const cervezas = resultado
            const datos ={cervezas}
            const countByCategory = await sequelize.query("SELECT category, COUNT(category) as cantCategories  FROM Products p GROUP BY category ORDER BY category", { type: QueryTypes.SELECT })
            const productByCategoryName = await sequelize.query("SELECT c.description , COUNT(p.id) as CountProduct FROM Categories as c INNER JOIN Products as p ON p.category= c.id group by c.description", { type: QueryTypes.SELECT } )
            
            
            for (let i=0; i < resultado.length; i++){   
                const salesPerProduct = await sequelize.query("SELECT d.product_id , COUNT(*)  AS ventas  FROM DetailSales AS d INNER JOIN Sales AS s ON s.id = d.sales_id  WHERE d.product_id =" + resultado[i].id + " GROUP BY d.product_id", { type: QueryTypes.SELECT } )      
         
                resultado[i] = {id: resultado[i].id,
                            name: resultado[i].name,
                            description: resultado[i].description,
                            price: resultado[i].price,
                            category: resultado[i].category,
                            image: resultado[i].image,
                            link: "http://localhost:3001/api/product/productList/"+  resultado[i].id,
                            salesPerProduct:salesPerProduct ? salesPerProduct : null
                            }
               }  

            res.status(200).json({
                            meta:{status:200, link: "http://localhost:3001/api/product/productList/" },
                            count:cervezas.length,
                            countByCategory:countByCategory,
                            productByCategoryName: productByCategoryName,
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


const productDelete = async (req, res) => {
    let id = parseInt(req.params.id);    
    const cerveza = await Product.findOne({
        where:{id:req.params.id}
    });
    await cerveza.destroy()
    res.redirect('/product/productPage');
}

const category = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const categories = await Categories.findAll();
    
    res.status(200).json({data:categories,
                          status:200})


}

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
    category
}

module.exports=productControler;