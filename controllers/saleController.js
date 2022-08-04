const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, Association,QueryTypes } = require("sequelize");
const express = require('express');
const sale = db.Sales;
const Product = db.Products;
const Detailsale = db.DetailSales;

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
                    //return res.status(200).send(products_Detail) 
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

        let id = req.params.id;
        const DetailSalesProduct = await sequelize.query("SELECT d.id , d.quantity  FROM DetailSales d INNER JOIN Sales s ON s.id = d.sales_id " +
                "where d.product_id =" + id + " and d.sales_id = " + idSale + " and users_id = " + Userid + " and s.state = 1 order by d.id desc LIMIT 1 ",{ type: QueryTypes.SELECT })    
        
        if (DetailSalesProduct[0] == undefined ){
            const produc_sale = await Detailsale.create({
                price:product.price,
                quantity: 1 ,
                Sales_id:idSale,
                product_id:product.id
            })  
        }else{
            DetailSalesProduct[0].quantity +=1
            const UpdateSalesProduct = await sequelize.query("UPDATE DetailSales SET quantity = " + DetailSalesProduct[0].quantity  + 
                    " where id = " + DetailSalesProduct[0].id  ,{ type: QueryTypes.UPDATE })    
        }

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
        
        let id = req.params.id;
        const itemToDelete = await sequelize.query("DELETE FROM DetailSales WHERE id IN (SELECT r.id FROM (SELECT d.id FROM DetailSales d " +
        "inner join Sales s on s.id = d.sales_id "+
        "where product_id =" +id+ " and s.users_id ="+req.session.userLogged.id+")r)",{ type: QueryTypes.DELETE })          
        res.redirect('./');
    }   
}
module.exports = salesController;