const type = require('../model/bbdd')

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
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    }
};

module.exports = controllerMain;