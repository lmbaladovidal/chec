const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const express = require('express');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const sales = db.Sale;
const Detailsales = db.Detailsale;
//const Shoppingcarts = db.Shoppingcart;
//const Shoppingcart_products = db.Shoppingcart_product;

const salesController = {
    'list': (req, res) => {
        db.Sale.findAll({
            include: ['detailsale']
        })
            .then(sales => {
                //console.log(sales);
                //res.render('moviesList.ejs', {sales})
            })
    }, 
    add: function (req,res) {},
    create: function (req,res) {
       console.log(req.body)
       carrito = sales.create({
                shippingCost: req.body.priceBotella500,
                quantity: req.body.quantity,
                discount: req.body.discount,
                total: req.body.total,
                Users_id: req.session.userLogged.id,
                state: 1,
            })
            .then(()=> {
             res.redirect('/sales')
             console.log('soy carrito ' + carrito)
             return carrito 
        })            
        .catch(error => res.send(error)) 
    },
    confirmShopingCart: async (req,res) => {
        let Userid = parseInt(req.session.userLogged.id);
        //console.log (Userid)
        let id = parseInt(req.params.id);
            const sale = await sale.findOne({
                where:{id:req.params.id}
            }); 
            if (sale === null) {
               console.log(create)
            }else
            sale.set({
                state: 2,
            })
            await sale.save();                
            res.redirect('/sale')
        }
   
}
module.exports = salesController;