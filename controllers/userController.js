const fs = require('fs');
const path = require('path');
const usuariosFilePath = path.join(__dirname,'../DataBase/BDUsuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath,"utf-8"))

const userController = {
    login: (req,res) => {
        res.render('./users/login');
    },
    register: (req,res) => {
        res.render('./users/register');
    },

    userRegister : (req,res) =>{
        /*"name":"Araceli",
           "lastName":"Catalano",
           "dateOfBirth":"26/03/1985",
           "address":"Lacarra  - San Telmo",
           "email":"aracelicatalano@gmail.com",
           "userRole":"Admin"*/
        let id = usuarios[usuarios.length-1].id + 1;
        let usuario ={  
                        id:id,
                        name:req.body.name,
                        lastname:req.body.lastName,
                        dateOfbirth:req.body.birthDate,
                        adress:req.body.adress,
                        email:req.body.email,
                        userRole:"User"}
        //res.send(usuario);
        usuarios.push(usuario)
        let usuarios_JSON = JSON.stringify(usuarios);
        fs.writeFileSync(usuariosFilePath,usuarios_JSON);
        res.send(usuario);
    }
}

module.exports = userController