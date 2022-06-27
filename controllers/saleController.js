const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Sales = db.Sale;
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
    }, add: function (req,res) {

    },
    create: function (req,res) {
       Sales
        //console.log(req.body)
        //console.log(req)
         .create({
                shippingCost: req.body.botella500,
                quantity: req.body.quantity,
                discount: 10,
                total: req.body.total,
                Users_id: req.body.Users_id,
                state: 1,
            })
            .then(()=> {
        //    console.log(sales)
            return res.redirect('/sales')
            //res.render('/sales',{})
        })            
        .catch(error => res.send(error)) 
        //.catch( async emailNotFound =>{
        //   let saleToCreate = {    
        //        ...req.body,
        //        shippingCost: hashSync(req.body.botella500, 10), // encripta la contraseña y pisa la password que viene en body
        //        quantity: req.body.quantity,
        //        discount: 10,
        //        total: req.body.total,
        //        Users_id: 1,
        //        state: 1
        //        
        //      };      
        //      return await Sales.create(saleToCreate)          
        //    })

    },
}
module.exports = salesController;