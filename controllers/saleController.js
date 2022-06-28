const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const express = require('express');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Sales = db.Sale;
const Detailsales = db.Detailsale;
//const Shoppingcarts = db.Shoppingcart;
//const Shoppingcart_products = db.Shoppingcart_product;

const salesController = {
    'list': (req, res) => {
      /*  db.Sale.findAll({
            include: ['detailsale']
        })
            .then(sales => {
                //console.log(sales);
                //res.render('moviesList.ejs', {sales})
            })*/
    }, 
    add: function (req,res) {},
    create: function (req,res) {
       console.log(req.body)
       Sales.create({
                shippingCost: req.body.priceBotella500,
                quantity: req.body.quantity,
                discount: req.body.discount,
                total: req.body.total,
                Users_id: req.session.userLogged.id,
                state: 1,
            })
            .then(()=> {
            return res.redirect('/sales')
        })            
        .catch(error => res.send(error)) 
    },
}
module.exports = salesController;