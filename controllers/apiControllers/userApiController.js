const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../DataBase/models");
const sequelize = db.Sequelize;
const { Op } = require("sequelize");
const Users = db.Users;

const userApiController = {
 
  
  profile: (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    Users.findOne({
      where: {
        id: req.params.id,
      },
    }).then((user)=>{
      
      res.status(200).json({
                data:user,
                status:200
              });
    })  
    
  },
};
module.exports = userApiController;
