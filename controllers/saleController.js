const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Sales = db.Sale;
const Detailsales = db.Detailsale;
const Shoppingcarts = db.Shoppingcart;
const Shoppingcart_products = db.Shoppingcart_product;

const saleController = {
    'list': (req, res) => {
        db.Sale.findAll({
            include: ['detailsale']
        })
            .then(sales => {
                console.log(sales);
                //res.render('moviesList.ejs', {sales})
            })
    },
}