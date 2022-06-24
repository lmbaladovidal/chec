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

  //  const resultValidation = validationResult(req);
  //   if (resultValidation.errors.length > 0) {
  //     return res.render("./users/register", {
  //       errors: resultValidation.mapped(),
  //       oldData: req.body,
  //     });
  //   };
  Users.findOne({
      where:{
        email : req.body.email
      }
    })
    .catch(error => {
      res.send(error)
    }) 
    .then(userInDb => {
        res.render("./users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado.",
            },
        oldData: req.body,
      }})
      res.send(userInDb)
      
    })
  .catch( async emailNotFound =>{
    let userToCreate = {    
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10), // encripta la contraseña y pisa la password que viene en body
        avatar: req.file ? req.file.filename : "default.png",
        userrole_id: 1,
      };      
      return await Users.create(userToCreate)           
    })
    return  res.redirect("./login");
  },
  login: (req, res) => {
    res.render("./users/login");
  }

}
module.exports = userController;
