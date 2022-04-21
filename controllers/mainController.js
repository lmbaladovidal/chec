const controllerMain = {
    index: (req,res) => {
        res.render('index');
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
    pack: (req,res) => {
        res.render('pack');
    },
    productCart: (req,res) => {
        res.render('productCart');
    },
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    productPage: (req,res) => {
        res.render('productPage');
    },
    register: (req,res) => {
        res.render('register');
    }
};

module.exports = controllerMain;