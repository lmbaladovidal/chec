const fs = require('fs');
const path = require('path');

const recetasFilePath = path.join(__dirname, '../DataBase/bbddRecetas.json');
const recetas = JSON.parse(fs.readFileSync(recetasFilePath,"utf-8"));

const nuestrasRecetasController = {
    
    recetas: (req,res) => {
        const userLogged = req.session.userLogged;
        const datos ={recetas,userLogged }
       
        res.render('./recetas/nuestrasRecetas',{datos});
    }   
    
};

module.exports = nuestrasRecetasController;