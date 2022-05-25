const express = require('express');
const path = require("path");
const methodOverride= require('method-override')
const rutaControllers = require("./routes/main.js");
const productRouter = require("./routes/productRouter");
const nuestrasRecetasRouter = require('./routes/nuestrasRecetasRouter');
const userRouter = require("./routes/userRouter");

const notFound = require("./middlewares/notFound");

const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


const app = express();

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000') 
});

app.use(methodOverride('_method'));//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(express.urlencoded({ extended: false })); //URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use("/", rutaControllers);


app.use("/quienesSomos", rutaControllers);
app.use("/product", productRouter);
app.use("/", nuestrasRecetasRouter);
app.use("/users", userRouter);

app.use(notFound)



