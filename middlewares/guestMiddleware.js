function guestMiddleware(req, res, next) {
	console.log("pase por aca antes del moco")
	if (req.session.userLogged) {
		return res.redirect('/users/profile');
	}
	next();
}

module.exports = guestMiddleware;