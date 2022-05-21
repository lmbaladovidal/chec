const fs = require("fs");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const User = require("../model/Users");

//const path = require('path');
//const usuariosFilePath = path.join(__dirname,'../DataBase/BDUsuarios.json');
//const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath,"utf-8"))

const userController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  loginProcess: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }
        return res.render("./users/profile", { user: userToLogin });
        //return res.redirect('/users/profile');
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
  },
  register: (req, res) => {
    res.render("./users/register");
  },

  userRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userInDB = User.findByField("email", req.body.email); // busca si ya hay un usuario registrado con el mail que está creando el usuario

    if (userInDB) {
      // y si está registrado ...
      return res.render("./users/register", {
        errors: {
          //... envía un error.
          email: {
            msg: "Este email ya está registrado.",
          },
        },
        oldData: req.body,
      });
    }

    let userToCreate = {
      //variable de creación de un nuevo usuario
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10), // encripta la contraseña y pisa la password que viene en body
      avatar: req.file ? req.file.filename : "default.png",
      userRole: "user",
    };

    let userCreated = User.create(userToCreate);

    return res.redirect("./login");
  },
  profile: (req, res) => {
    return res.render("profile");
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;
