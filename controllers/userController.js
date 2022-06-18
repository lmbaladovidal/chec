const fs = require('fs');
const path = require('path');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../DataBase/models')
const sequelize = db.Sequelize;
const {Op} = require('sequelize')

const Users = db.Users;
const UserRoles = db.UserRoles;

const userController = {
  register: (req, res)=>{
    res.render("./users/register");
  },
  userRegister: (req,res) => {

   const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    };
  Users.findOne({
      where:{
        email : req.body.email
      }
    }).then(userInDb => {
        res.render("./users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado.",
            },
        oldData: req.body,
      }})
      res.send(userInDb)
      
  })
  .catch(emailNotFound =>{
    console.log(req.body);
    let userToCreate = {    
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10), // encripta la contraseña y pisa la password que viene en body
        avatar: req.file ? req.file.filename : "default.png",
        userroles_id: 1,
      };
      
      return Users.create(userToCreate);
     
    },

  )
  .then(response =>{
    return  res.redirect("/login");
  })
},
login: (req, res) => {
  res.render("./users/login");
},

loginProcess: (req, res) => {
  let userToLogin = Users.findOne({
    where:{
      email: req.body.email}
    });
 
  
  if (userToLogin) {
    //res.send( [userToLogin,userToLogin.password+" Aca estaba el pass"])
    let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);      
    if (isOkThePassword) {
      delete userToLogin.password;
      req.session.userLogged = userToLogin;
      if (req.body.remember_user) {
        res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
      }
      //return res.render("./users/profile", { user: userToLogin });
      return res.redirect('/users/profile');
    }
    return res.render("./users/login", {
      errors: {
        email: {
          msg: "Las credenciales son inválidas",
        },
      },
    });
  }
  return res.render("./users/login", {
    errors: {
      email: {
        msg: "No se encuentra este email en nuestra base de datos",
      },
    },
  });
}
}



  


 


module.exports = userController;
