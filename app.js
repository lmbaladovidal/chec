const express = require('express');
const path = require("path");
const methodOverride= require('method-override')
const rutaControllers = require("./routes/main.js");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const app = express();


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
app.use("/users", userRouter);
app.use("/notFound", rutaControllers);



