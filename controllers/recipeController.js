const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const db = require("../DataBase/models");
const sequelize = db.Sequelize;
const { Op } = require("sequelize");
const Recipes = db.Recipes;

const recetasDetail = (req, res) => {
  const userLogged = req.session.userLogged;
  db.Recipes.findAll()
    .then((resultado) => {
      const recetas = resultado;
      const datos = { recetas, userLogged };
      res.render("./recetas/nuestrasRecetas", { datos });
    })
    .catch((error) => {
      console.log(error);
    });
};

const recetaNew = (req, res) => {
  res.render("./recetas/nuevaReceta");
};

const recetaCreate = async (req, res) => {
  const resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
   //return res.send(resultValidation.mapped())
        return res.render("./recetas/nuevaReceta", {
            errors: resultValidation.mapped(),
            oldData: req.body,
        });
  }
  await Recipes.create({
    name: req.body.name,
    volume: req.body.volume,
    boilvolume: req.body.boilvolume,
    alcohol: req.body.alcohol,
    targetFG: req.body.targetFG,
    targetOG: req.body.targetOG,
    initialPH: req.body.initialPH,
    finalPH: req.body.finalPH,
    mashTemp: req.body.mashTemp,
    mashTime: req.body.mashTime,
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
    yeast: req.body.yeast,
    yeastAmount: req.body.yeastAmount,
    brewerTip: req.body.brewerTip,
    foodPairing: req.body.foodPairing,
  });
  res.redirect("./nuestrasRecetas");
  //.then(()=>{ return res.redirect('./nuestrasRecetas')})

  // .catch(error => console.log(error));
};

const recetaEdit = (req, res) => {
  let id = parseInt(req.params.id);
  Recipes.findOne({
    where: { id: id },
  })

    .then((recipe) => {
      //console.log( recipe );
      let recetaToEdit = {
        id: id,
        name: recipe.name,
        volume: recipe.volume,
        boilvolume: recipe.boilvolume,
        alcohol: recipe.alcohol,
        targetFG: recipe.targetFG,
        targetOG: recipe.targetOG,
        initialPH: recipe.initialPH,
        finalPH: recipe.finalPH,
        mashTemp: recipe.mashTemp,
        mashTime: recipe.mashTime,
        boilTime: recipe.boilTime,
        fermentationTemp: recipe.fermentationTemp,
        malt1: recipe.malt1,
        malt1Amount: recipe.malt1Amount,
        malt2: recipe.malt2,
        malt2Amount: recipe.boilTime,
        malt3: recipe.malt3,
        malt3Amount: recipe.malt3Amount,
        malt4: recipe.malt4,
        malt4Amount: recipe.malt4Amount,
        malt5: recipe.malt5,
        malt5Amount: recipe.malt5Amount,
        hop1: recipe.hop1,
        hop1Amount: recipe.hop1Amount,
        hop2: recipe.hop2,
        hop2Amount: recipe.hop2Amount,
        hop3: recipe.hop3,
        hop3Amount: recipe.hop3Amount,
        yeast: recipe.yeast,
        yeastAmount: recipe.yeastAmount,
        brewerTip: recipe.brewerTip,
        foodPairing: recipe.foodPairing,
      };
      res.render("./recetas/editRecetas", { recetaToEdit });
    })
    .catch((error) => console.log(res.send(error)));
};
//*hasta aca funciona OK*//

const recetaUpdate = async (req, res) => {
  req.body.id = req.params.id;
  let recetaToEdit = await Recipes.findOne({ where: { id: req.params.id } });
  // res.send(recetaToEdit)
  recetaToEdit.set({
    name: req.body.name,
    volume: req.body.volume,
    boilvolume: req.body.boilvolume,
    alcohol: req.body.alcohol,
    targetFG: req.body.targetFG,
    targetOG: req.body.targetOG,
    initialPH: req.body.initialPH,
    finalPH: req.body.finalPH,
    mashTemp: req.body.mashTemp,
    mashTime: req.body.mashTime,
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
    yeast: req.body.yeast,
    yeastAmount: req.body.yeastAmount,
    brewerTip: req.body.brewerTip,
    foodPairing: req.body.foodPairing,
  });

  await recetaToEdit.save();
  res.redirect("/recetas/nuestrasRecetas");
};

const recetaDelete = (req, res) => {
  let id = req.params.id;

  Recipes.findOne({ where: { id: id } })

    .then((recipeToDelete) => {
      console.log(recipeToDelete);

      Recipes.destroy({ where: { id: recipeToDelete.id } });
      return res.redirect("/recetas/nuestrasRecetas");
    })
    .catch((error) => console.log(error));
};

const recipeController = {
  recetasDetail,
  recetaNew,
  recetaCreate,
  recetaEdit,
  recetaDelete,
  recetaUpdate,
  recetas: Recipes,
};

module.exports = recipeController;
