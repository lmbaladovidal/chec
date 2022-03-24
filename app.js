const express = require('express');
const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000') 
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});




