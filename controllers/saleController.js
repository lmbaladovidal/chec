const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const express = require('express');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const sale = db.Sales;

const Detailsale = db.Detailsales;
//const Shoppingcarts = db.Shoppingcart;
//const Shoppingcart_products = db.Shoppingcart_product;


     // db.Sale.findAll({
        //     include: ['detailsale']
        // })
        //     .then(sales => {
        //         //console.log(sales);
        //         //res.render('moviesList.ejs', {sales})
        //     })
        //     return res.redirect("/product/productCart")
        //res.render('/product/productCart',{SaleShippingUser})}
        //include: ['detailsale'],
const salesController = {
    list: async (req, res) => {
      
        let SaleShippingUser = await sale.findOne({
              where:{Users_id:req.session.userLogged.id}
        });
        
        SaleShippingUser.map(e => {console.log(e)})
        return res.send(SaleShippingUser)
        if(SaleShippingUser==undefined)  {
            console.log("SALE")
            //res.render('enDesarrollo')
            
        }else{
            console.log("TENEMOS dATOS");
            //SaleShippingUser.map(element => {console.log(element.Detailsale[0])});}
            let Products_Detail = await Detailsale.findAll({
                    include: ["Products"],
                    where:{Sales_id:SaleShippingUser[0].id}
                    });
            res.status(200).json(Products_Detail)
            //res.sendStatus(SaleShippingUser);
            }
        //console.log( {SaleShippingUser});}
    }, 
    createShopingCart: async function (req,res) {
        carrito = await sale.create({
            Users_id: req.session.userLogged.id,
            state: 1,
        })
        res.send(carrito)
        res.redirect('/sales')           
    },
    addShopingCart: async function (req,res) {
        let Userid = parseInt(req.session.userLogged.id);
        const saleFinded = await sale.findOne({where:{Users_id:Userid}});
        if (saleFinded === null) {
            carrito = await sale.create({
                Users_id: Userid,
                state: 1,
            })  
            idSale = carrito.id            
            
        }else{
            idSale =saleFinded.id
        }

        produc_sale = await db.Detailsale.create({
            price:3,
            quantity:1,
            Sales_id:idSale,
        })  

        //console.log(produc_sale)
        //return res.redirect("/product/productCart")

    },
    confirmShopingCart: async (req,res) => {
        let Userid = parseInt(req.session.userLogged.id);
        //console.log (Userid)
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
            res.redirect('/sale')
        }
   
}
module.exports = salesController;