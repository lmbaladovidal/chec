
const db = require('../DataBase/models')
const sequelize = db.Sequelize;
const Users = db.Users
const {Op} = require('sequelize')

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = Users.findOne({
		where:{
			email: emailInCookie}
		});

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}
	next();
}

module.exports = userLoggedMiddleware;