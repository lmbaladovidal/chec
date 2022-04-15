const express = require('express');
const app = express();

const path = require("path");

app.use(express.static("public"));
const rutaControllers = require("./routes/main.js");

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000') 
});

app.use("/", rutaControllers);
app.use("/productPage", rutaControllers);
app.use("/productDetail", rutaControllers);
app.use("/register", rutaControllers);
app.use("/login", rutaControllers);
app.use("/productCart", rutaControllers);
app.use("/notFound", rutaControllers);
app.use("/pack", rutaControllers);
app.use("/quienesSomos", rutaControllers);




