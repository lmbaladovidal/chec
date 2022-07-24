const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const express = require('express');
const sale = db.Sales;
const Product = db.Products;
const Detailsale = db.Detailsales;

const salesController = {
    list: async (req, res) => {
        let SaleShippingUser = await sale.findOne({
              where:{users_id:req.session.userLogged.id}
        });
        if(SaleShippingUser==undefined)  {
           
            res.render('enDesarrollo')
        }else{
            const json = JSON.stringify(JSON.parse(SaleShippingUser.id));
             const products_Detail = await Detailsale.findAll({
                     include: ['Products'],
                     where:{Sales_id:(json)
                     }
                     })
                     res.render('./sales/productCart',{products_Detail})}
    }, 
    createShopingCart: async function (req,res) {
        carrito = await sale.create({
            users_id: req.session.userLogged.id,
            state: 1,
            product_id: 1
        })
        res.send(carrito)
        res.redirect('/sales')           
    },
    addShopingCart: async function (req,res) {
        let Userid = req.session.userLogged.id;
        const saleFinded = await sale.findOne({where:{users_id:Userid}});
        if (saleFinded === null) {
            carrito = await sale.create({
                users_id: Userid,
                state: 1,
            })  
            idSale = carrito.id
        }else{
            idSale =saleFinded.id
        }
        const product = await Product.findOne({
            where:{id:req.params.id}
        })
        const produc_sale = await Detailsale.create({
            price:product.price,
            quantity:1,
            Sales_id:idSale,
            product_id:product.id
        })  
        res.redirect("/product/productPage")
    },
    confirmShopingCart: async (req,res) => {
        let Userid = parseInt(req.session.userLogged.id);
        let id = parseInt(req.params.id);
            const saleFinded = await sale.findOne({
                where:{id:req.params.id}
            }); 
            if (saleFinded === null) {
               return console.log(this.createShopingCart)
            }
            saleFinded.set({
                state: 2,
            })
            await saleFinded.save();                
            return res.redirect('/sale')
            
    },
    deleteShoppingCart : async (req,res) => {
        
        let id = req.body.idProductInCart;
        const itemToDelete = await Detailsale.findOne({
            where:{id:id}

        })
        await Detailsale.destroy(itemToDelete)
        res.redirect('./sales/productCart');
    }   
}
module.exports = salesController;