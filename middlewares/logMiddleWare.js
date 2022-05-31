const fs = require('fs');
const path = require('path')

const pathFile = path.join(__dirname,"../logs/userLog.txt");

const logMiddleWare = (req,res,next)=> {
   fs.appendFileSync(pathFile, "El usuario ingresó a la ruta: " + req.url + '\n')
    next(); }

    module.exports = logMiddleWare;
