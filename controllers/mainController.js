const fs = require('fs');
const path = require('path');
const cervezasFilePath = path.join(__dirname, '../DataBase/products/BDCervezas.json');
const cervezas = JSON.parse(fs.readFileSync(cervezasFilePath,"utf-8"));

const controllerMain = {
    index: (req,res) => {        
        const userLogged = req.session.userLogged;
        const datos ={cervezas,userLogged}
        res.render('index',{datos});
    },
    quienesSomos: (req,res) => {
        res.render('quienesSomos');
    },
    enDesarrollo: (req,res) => {
        res.render('enDesarrollo');
    }
};

module.exports = controllerMain;