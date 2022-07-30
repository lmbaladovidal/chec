const path = require('path');
const db = require('../../DataBase/models');
const sequelize = db.sequelize;
const { Op, Association } = require("sequelize");
const express = require('express');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const sale = db.Sales;
const Product = db.Products;
const Detailsale = db.Detailsales;

const salesController = {
    list: async (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        let sales = await sale.findAll({
              where:{state:{[Op.eq]:1}}
        });
        res.status(200).json({
            data:sales,
            status:200
        })
    }
    
}
module.exports = salesController;
