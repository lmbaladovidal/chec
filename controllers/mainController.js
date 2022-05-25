const fs = require('fs');
const path = require('path');
const cervezasFilePath = path.join(__dirname, '../DataBase/BDCervezas.json');
const cervezas = JSON.parse(fs.readFileSync(cervezasFilePath,"utf-8"));

const recetasFilePath = path.join(__dirname, '../DataBase/bbddRecetas.json');
const recetas = JSON.parse(fs.readFileSync(recetasFilePath,"utf-8"));

const controllerMain = {
    index: (req,res) => {
        res.render('index',{cervezas:cervezas});
    },
    quienesSomos: (req,res) => {
        res.render('quienesSomos');
    },
    enDesarrollo: (req,res) => {
        res.render('enDesarrollo');
    },
    recetas: (req,res) => {
        // logica CRUD - mover a nuevo controller de nuevas recetas
        res.render('nuestrasRecetas', {recetas:recetas});
    },
    
    
};

module.exports = controllerMain;