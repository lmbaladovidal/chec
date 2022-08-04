const db = require('../DataBase/models')
const sequelize = db.Sequelize;
const Users = db.Users
const {Op} = require('sequelize')

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	let emailInCookie = req.cookies.userEmail;
	if(emailInCookie){
		Users.findOne({
		where:{
			email: emailInCookie
		},
		nest:true
		}).then((userFromCookie) => {
			req.session.userLogged = userFromCookie;
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
		}).catch((error) => {
			console.log(error)
			
		})
	}else if(req.session && req.session.isLogged){
		res.locals.userLogged = req.session.userLogged;
		res.locals.isLogged = true;
	}
		next();
	}

module.exports = userLoggedMiddleware;