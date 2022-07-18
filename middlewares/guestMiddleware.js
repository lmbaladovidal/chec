function guestMiddleware(req, res, next) {
	console.log("Me pide que inicie sesion")
	if (req.session.userLogged) {
		return res.redirect('/users/profile');
	}
	next();
}

module.exports = guestMiddleware;