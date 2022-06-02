const fs = require('fs');
const { restart } = require('nodemon');
const path = require('path');

const recetasFilePath = path.join(__dirname, '../DataBase/bbddRecetas.json');
const recetas = JSON.parse(fs.readFileSync(recetasFilePath,"utf-8"));



const recetasDetail = (req,res) => {
    const userLogged = req.session.userLogged;
    const datos ={recetas,userLogged }
   
    res.render('./recetas/nuestrasRecetas',{datos});
};

const recetaAdmin =(req,res)=>{
    //res.send(req.body);
    let id= parseInt(req.params.id);
    let recetaToEdit = recetas.find(receta => {
        return receta.id == id
    });    
    res.render('./recetas/nuestrasRecetasAdmin',{recetaToEdit})
};

const recetaCreate = (req,res) => {
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
        mashTime:req.body.mashTime,
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
    recetas.push(receta);
    let recetas_JSON= JSON.stringify(recetas, null, 2);
    let recetasPath= path.join(__dirname, '../DataBase/BDCervezas.json');
    fs.writeFileSync(recetasPath, recetas_JSON);
    res.redirect('/recetas/nuestrasRecetas')
};



const recetaDelete = (req, res) => {
    let id = parseInt(req.params.id);
    
    let nonDeletedRecetas = recetas.filter(receta=>receta.id!==id);
    let recetas_JSON = JSON.stringify(nonDeletedRecetas, null, 2);   
    let recetasPath= path.join(__dirname, '../DataBase/bbddRecetas.json');
    fs.writeFileSync(recetasPath, recetas_JSON);
    res.redirect('./recetas/nuestrasRecetas');
};

const recetaUpdate = (req, res) =>{
    let id = parseInt(req.params.id);
    if(product.id == id){   
    recetas.forEach(receta =>{
        receta.name= req.body.name,
        receta.recetavolume= req.body.volume,
        receta.boilvolume= req.body.boilvolume,
        receta.alcohol= req.body.alcohol,
        receta.targetFG= req.body.targetFG,
        receta.targetOG= req.body.targetOG,
        receta.initialPH= req.body.initialPH,
        receta.finalPH= req.body.finalPH,
        receta.mashTemp= req.body.mashTemp,
        receta.mashTime=req.body.mashTime,
        receta.boilTime= req.body.boilTime,
        receta.fermentationTemp= req.body.fermentationTemp,
        receta.malt1= req.body.malt1,
        receta.malt1Amount= req.body.malt1Amount,
        receta.malt2= req.body.malt2,
        receta.malt2Amount= req.body.boilTime,
        receta.malt3= req.body.malt3,
        receta.malt3Amount= req.body.malt3Amount,
        receta.malt4= req.body.malt4,
        receta.malt4Amount= req.body.malt4Amount,
        receta.malt5= req.body.malt5,
        receta.malt5Amount= req.body.malt5Amount,
        receta.hop1= req.body.hop1,
        receta.hop1Amount= req.body.hop1Amount,
        receta.hop2= req.body.hop2,
        receta.hop2Amount= req.body.hop2Amount,
        receta.hop3= req.body.hop3,
        receta.hop3Amount= req.body.hop3Amount,
        receta.hop4= req.body.hop4,
        receta.hop4Amount= req.body.hop4Amount,
        receta.yeast= req.body.yeast,
        receta.yeastAmount= req.body.yeastAmount,
        receta.brewerTip= req.body.brewerTip,
        receta.foodPairing= req.body.foodPairing
        })   
        }
        
    let recetas_JSON= JSON.stringify(recetas, null, 2);
    
    let recetasPath= path.join(__dirname, '../DataBase/bbddRecetas.json');
    fs.writeFileSync(recetasPath, recetas_JSON);
    res.redirect('./recetas/nuestrasRecetas')
}


const nuestrasRecetasController = {
    recetasDetail,
    recetaDelete,
    recetaAdmin,
    recetaCreate,
    recetaUpdate,       
    recetas:recetas
}

module.exports = nuestrasRecetasController;