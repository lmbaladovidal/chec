<<<<<<< HEAD

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

=======

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

>>>>>>> 8b8ad725b5eb060f5272a29b47656aeaf77ab001
module.exports = userLoggedMiddleware;