const fs = require('fs');
const { restart } = require('nodemon');
const path = require('path');

const recetasFilePath = path.join(__dirname, '../DataBase/bbddRecetas.json');
const recetas = JSON.parse(fs.readFileSync(recetasFilePath,"utf-8"));

const nuestrasRecetasController = {
 
    recetas: (req,res) => {
        res.render('./recetas/nuestrasRecetas', {recetas:recetas});
    }
    /*
    recetaCreate: (req,res)=>{
    //res.send(req.body);
    receta = {
        id: recetas[recetas.length-1].id+1,
        name: req.body.name,
        volume: req.body.volume,
        boilvolume: req.body.boilvolume,
        alcohol: req.body.alcohol,
        targetFG: req.body.targetFG,
        targetOG: req.body.targetOG,
        initialPH: req.body.initialPH,
        finalPH: req.body.finalPH,
        mashTemp: req.body.mashTemp,
        mashTime:req.file.mashTime,
        boilTime: req.body.boilTime,
        fermentationTemp: req.body.fermentationTemp,
        malt1: req.body.malt1,
        malt1Amount: req.body.malt1Amount,
        malt2: req.body.malt2,
        malt2Amount: req.body.boilTime,
        malt3: req.body.malt3,
        malt3Amount: req.body.malt3Amount,
        malt4: req.body.malt4,
        malt4Amount: req.body.malt4Amount,
        malt5: req.body.malt5,
        malt5Amount: req.body.malt5Amount,
        hop1: req.body.hop1,
        hop1Amount: req.body.hop1Amount,
        hop2: req.body.hop2,
        hop2Amount: req.body.hop2Amount,
        hop3: req.body.hop3,
        hop3Amount: req.body.hop3Amount,
        hop4: req.body.hop4,
        hop4Amount: req.body.hop4Amount,
        yeast: req.body.yeast,
        yeastAmount: req.body.yeastAmount,
        brewerTip: req.body.brewerTip,
        foodPairing: req.body.foodPairing
      }
    receta.push(receta);
    let recetas_JSON= JSON.stringify(recetas, null, 2);
    let recetasPath= path.join(__dirname, '../DataBase/BDCervezas.json');
    fs.writeFileSync(recetasPath, recetas_JSON);
    res.redirect('/recetas/nuestrasRecetas')
    }
    */    
}

module.exports = nuestrasRecetasController;