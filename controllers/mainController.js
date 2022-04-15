const controllerMain = {
    index: (req,res) => {
        res.sendFile('index.html', { root: './views'});
    },
    quienesSomos: (req,res) => {
        res.sendFile('quienesSomos.html', { root: './views'});
    },
    enDesarrollo: (req,res) => {
        res.sendFile('enDesarrollo.html', { root: './views'});
    },
    login: (req,res) => {
        res.sendFile('login.html', { root: './views'});
    },
    pack: (req,res) => {
        res.sendFile('pack.html', { root: './views'});
    },
    productCart: (req,res) => {
        res.sendFile('productCart.html', { root: './views'});
    },
    productDetail: (req,res) => {
        res.sendFile('productDetail.html', { root: './views'});
    },
    productPage: (req,res) => {
        res.sendFile('productPage.html', { root: './views'});
    },
    register: (req,res) => {
        res.sendFile('register.html', { root: './views'});
    }
};

module.exports = controllerMain;