const fs = require('fs');
const path = require('path');

const recetasFilePath = path.join(__dirname, '../DataBase/bbddRecetas.json');
const recetas = JSON.parse(fs.readFileSync(recetasFilePath,"utf-8"));

const nuestrasRecetasController = {
    
    recetas: (req,res) => {
        // logica CRUD - mover a nuevo controller de nuevas recetas 
        res.render('./recetas/nuestrasRecetas',{recetas});
    },
};

module.exports = nuestrasRecetasController;