const fs = require('fs');
const path = require('path');


const db = require('../DataBase/models')
const controllerMain = {
    index: (req,res) => {        
        const userLogged = req.session.userLogged;
        db.Products.findAll()
        .then(resultado=>{
            const cervezas = resultado
            const datos ={cervezas,userLogged}
            res.render('index',{datos});
            }
        )
        .catch(error=>{console.log(error)})
        
    },
    quienesSomos: (req,res) => {
        res.render('quienesSomos');
    },
    enDesarrollo: (req,res) => {
        res.render('enDesarrollo');
    }
};

module.exports = controllerMain;