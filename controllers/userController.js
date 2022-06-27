const fs = require('fs');
const path = require('path');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../DataBase/models')
const sequelize = db.Sequelize;
const {Op} = require('sequelize')
const Users = db.Users


const userController = {
  login: (req, res) => {
    res.render("./users/login");
  },

  loginProcess: (req, res) => {
    Users.findOne({where:{email: req.body.email}})
    .then(userToLogin =>{
   //   console.log(userToLogin);
        let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password); 

        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin
        };
        
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }

        return res.redirect('/users/profile');
      })
      .catch(error=>{
        console.log(error)
        res.render("./users/login", {errors:{email:{msg:'las credenciales no son validas'}}})
      })
    
  },
  register: (req, res) => {
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
        avatar: req.file ? req.file.filename : "default_img.png",
        userrole_id: 1,
      };      
      return await Users.create(userToCreate)          
    })
      return res.redirect("./login");
  },
  
  profile: (req, res) => {
    return res.render('./users/profile', {user: req.session.userLogged});  // pasar a la vista la variable userLogged
    
  },
  editProfile: (req, res) =>{
    Users.findOne({
        where:{
          id: req.session.userLogged.id
        }
      })
     
    .then(user =>{
      let userToEdit ={
      id: user.id,  
      name: user.name,
      lastName: user.lastName,
      birthDate: user.birthDate,
      address: user.address,
      email: user.email,
        
    }
    //console.log({userToEdit})
     return res.render('./users/editprofile',{userToEdit});
 })
  .catch(error => {
       res.send(error)
     })
},
  updateProfile: (req, res) =>{

    Users.update({
      name: req.body.name,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      address: req.body.address,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      
  },{
      where:{
        id: req.params.id,
    
      }
    },
   
  )
    .then(userEdited => {
      console.log(userEdited);      
      return res.redirect("./users/profile");
    }) 
      .catch(error => {res.send(error)})         
   
  },
  deleteProfile: (req, res)=>{
    Users.findOne({
      where:{
        id: req.session.userLogged.id
      }
    })
    .catch(error => console.log(error))
    .then(user =>{
      console.log(user)
      console.log("llego hasta ttraer el usuario pero no borro");
      res.clearCookie("userEmail");
      req.session.destroy()
      Users.destroy({ where:{id: user.id} })
   ;
      return res.redirect('/')

    })
     
    .catch(error => console.log(error))
    
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
}

}
module.exports = userController;
