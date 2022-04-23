const type = require('../model/bbddCerveza')

const controllerMain = {
    index: (req,res) => {
        res.render('index',{type:type});
    },
    quienesSomos: (req,res) => {
        res.render('quienesSomos');
    },
    enDesarrollo: (req,res) => {
        res.render('enDesarrollo');
    },
    
};

module.exports = controllerMain;