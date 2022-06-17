const fs = require('fs');
const path = require('path');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../DataBase/models')
const sequelize = db.Sequelize;
const {Op} = require('sequelize')

const Users = db.users;
const UserRoles = db.UserRoles;

const userController = {
  register: (req, res)=>{
    res.render("./users/register");
  },
  userRegister: (req,res) => {

    const prueba = {
      name: 'prueba',
      lastName: 'prueba',
      birthDate: Date.now(),
      address: 'direccion',
      email: 'email@prueba.com',
      userRole: 'role',
      avatar: 'avatar'
    }


    Users.findAll()
      .then(result => {
        console.log(result)
        res.send('trajo algo')
      })
      .catch( error => {
        console.log(error)
        res.send('error creando el usuario')
      })

  //   const resultValidation = validationResult(req);
  //   if (resultValidation.errors.length > 0) {
  //     return res.render("./users/register", {
  //       errors: resultValidation.mapped(),
  //       oldData: req.body,
  //     });
  //   };
  //   console.log(req.body.email)
  // Users.findOne({
  //     where:{
  //       email : req.body.email
  //     }
  //   }).then(userInDb => {
  //       res.render("./users/register", {
  //       errors: {
  //         email: {
  //           msg: "Este email ya está registrado.",
  //           },
  //       oldData: req.body,
  //     }})
  //     res.send(userInDb)
      
  // })
  // .catch(error =>{
         
  //   let userToCreate = {      
  //       ...req.body,
  //       password: bcryptjs.hashSync(req.body.password, 10), // encripta la contraseña y pisa la password que viene en body
  //       avatar: req.file ? req.file.filename : "default.png",
  //       userRole: "user",
  //     };
      
  //     return Users.create(userToCreate);
     
  //   },
  // )
  // .then(response =>{
  //   return  res.redirect("/");
  // })



}
}



  


 


module.exports = userController;
