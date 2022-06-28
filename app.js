const express = require('express');
const path = require("path");
const methodOverride= require('method-override')
const rutaControllers = require("./routes/main.js");
const productRouter = require("./routes/productRouter");
const recipeRouter = require('./routes/recipeRouter');
const userRouter = require("./routes/userRouter");
const saleRouter = require("./routes/saleRouter");

const notFound = require("./middlewares/notFound");

const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
//const logMiddleWare = require('./middlewares/logMiddleWare')




const app = express();

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);
//app.use(logMiddleWare)

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000') 
});

app.use(methodOverride('_method'));//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(express.urlencoded({ extended: false })); //URL encode  - Para que nos pueda llegar la información desde el formulario al req.body

app.use("/", rutaControllers);
app.use("/", recipeRouter);
app.use("/product", productRouter);
app.use("/recetas", recipeRouter);
app.use("/users", userRouter);
<<<<<<< HEAD
app.use("/sales",saleRouter)
app.use(notFound)
=======

//app.use(notFound)
>>>>>>> 4b5eda3c50553e7dcef22766d185965b57c57e84



