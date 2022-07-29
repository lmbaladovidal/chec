const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../DataBase/models");
const sequelize = db.Sequelize;
const { Op } = require("sequelize");
const Users = db.Users;

const userApiController = {
 
  
    login: (req, res) => {
      res.status(200).json({data:{view:"login"},status:200});//aca es necesario?
    },
  
    loginProcess: (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');
      Users.findOne({ where: { email: req.body.email } })
        .then((userToLogin) => {
          let isOkThePassword = bcryptjs.compareSync(
            req.body.password,
            userToLogin.password          
          );
          if (isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
          }
          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }
          return res.redirect("/users/profile");//redirect se sigue usando?
        })
        .catch((error) => {
          console.log(error);
          res.status(200).json({errors: { email: { msg: "las credenciales no son validas" } },});
        });
    },

    register:  (req, res) => {
      res.status(200).json({data:{view:"register"},
                            status:200});
    },

    userRegister: async(req, res) => {
      res.set('Access-Control-Allow-Origin', '*');
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.status(200).json({
          data: {
            errors: resultValidation.mapped(),
            oldData: req.body},
          status:200
        },
        );
      }
      Users.findOne({
        where: {
          email: req.body.email,
        },
      })      
      .then((result) => {
        if(result != null){
         res.status(200).json({
          data:{
            oldData: req.body,
            errors:{
              email: {msg: "Este email ya está registrado.",}
            },
            oldData: req.body,},
          status:200
          })                     
        }else{
          let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : "default_img.png",
            users_roles_id: 1,
            state: 1
          };
          Users.create(userToCreate)
          .then((result)=> res.redirect("./login"));//redirect se sigue usando?        
        };      
      })
    },
  
    profile: (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');            
      res.status(200).json({
                  data:"profile",
                  status:200
                });       
    },
  
    editProfile: (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');
      Users.findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((user) => {
        let userToEdit = {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          birthDate: user.birthDate,
          address: user.address,
          email: user.email,
          avatar: user.avatar
        };
        res.status(200).json({data:userToEdit,
                              status:200});
          
        })
      .catch((errors) => {console.log(errors)})      
    },

      updateProfile: async (req, res) => {
        const resultValidation = validationResult(req);
        console.log("req.file: ")
        console.log(req.file)
        console.log("validation ")
        console.log(resultValidation)
        let userToEdit= {...req.body,id:req.params.id}    
        if (resultValidation.errors.length > 0) {
            return res.status(200).json({
              userToEdit,
              errors: resultValidation.mapped(),
              oldData: {...req.body , avatar: req.file ? req.file.filename: req.body.oldAvatar? req.body.oldAvatar: "default_img.png"},
            });
        }
        let usuario= await  Users.findOne({
          where: { id: req.params.id},
        })
        usuario.set(     
          {
          name:req.body.name?req.body.name:oldData.name,
          lastName:req.body.lastName,
          email: req.body.email,
          address: req.body.address,
          birthDate: req.body.birthDate,
          avatar: req.file? req.file.filename: req.body.oldAvatar? req.body.oldAvatar: "default_img.png",
          },           
        )
        await usuario.save()
        res.redirect("/users/profile");//Redirect?
    },

    deleteProfile: async (req, res) => {
       let usuario= await  Users.findOne( {
        where: { id: req.session.userLogged.id}, })      
        .then((user) => {
          res.clearCookie("userEmail");
          req.session.destroy();
          user.set(  { state:0 } )
          user.save()
          res.redirect("/" );//Redirect?
        })  
        .catch((errors) => console.log(errors));
    },
  
    logout: (req, res) => {
      res.clearCookie("userEmail");
      req.session.destroy();
      return res.redirect("/");
    },

    userList: (req, res) => {
      res.set('Access-Control-Allow-Origin', '*');
      Users.findAll()
      .then((users) => {
      
        res.status(200).json({data:users,
                              status:200});
          
        })
      .catch((errors) => {console.log(errors)})      
    },

};
module.exports = userApiController;
