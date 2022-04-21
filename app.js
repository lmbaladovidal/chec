const express = require('express');
const path = require("path");
const rutaControllers = require("./routes/main.js");
const productRouter = require("./routes/productRouter");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000') 
});

app.use("/", rutaControllers);
app.use("/product", productRouter);
app.use("/register", rutaControllers);
app.use("/login", rutaControllers);
app.use("/notFound", rutaControllers);
app.use("/quienesSomos", rutaControllers);




