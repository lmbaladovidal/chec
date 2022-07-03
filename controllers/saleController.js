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

        console.log("Usuario: " + req.session.userLogged.id);
        let SaleShippingUser = await sale.findOne({
              where:{users_id:req.session.userLogged.id}
              //where:{Users_id:req.session.userLogged.id}
           
        });
        
        if(SaleShippingUser==undefined)  {
            console.log("SALE")
            //res.render('enDesarrollo')
            
        }else{
            
            //SaleShippingUser.map(element => {console.log(element.Detailsale[0])});}
            let Products_Detail = await Detailsale.findAll({
                    include: ["Products"],
                    where:{Sales_id:(JSON.parse(SaleShippingUser.id))}
                    });
            res.render('./sales/productCart',{Products_Detail})
            
        }
       
        
    }, 
    createShopingCart: async function (req,res) {
        carrito = await sale.create({
            users_id: req.session.userLogged.id,
            state: 1,
        })
        res.send(carrito)
        res.redirect('/sales')           
    },
    addShopingCart: async function (req,res) {
        //let Userid = parseInt(req.session.userLogged.id);
        //let Userid = parseInt(8);
        let Userid = req.session.userLogged.id;
        
        //res.redirect('/sales')           

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
        console.log("soy la id: "+ idSale);
        produc_sale = await Detailsale.create({
            price:3,
            quantity:1,
            Sales_id:idSale,
            product_id:3
        })  
        res.redirect("/product/productPage")
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
            return res.redirect('/sale')
            
    },
    deleteShoppingCart : async (req,res) => {
        
        let id = req.body.idProductInCart;
        console.log("TENEMOS dATOSSSSSS");
        const itemToDelete = await Detailsale.findOne({
            where:{id:id}

        })
        console.log("LLEGA" + itemToDelete)
        await Detailsale.destroy(itemToDelete)

        res.redirect('./sales/productCart');

    }
   
}
module.exports = salesController;