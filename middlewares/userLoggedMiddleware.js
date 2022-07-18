
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
			email: emailInCookie}
		}).then((userFromCookie) => {
			req.session.userLogged = userFromCookie;
			res.locals.isLogged = true;
			res.locals.userLogged = req.session.userLogged;
		}).catch((error) => {
			console.log(error)
			
		})
	}
		next();
	}

module.exports = userLoggedMiddleware;