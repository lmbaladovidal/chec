function guestMiddleware(req, res, next) {
	console.log("pase por aca que soy el GUESTMIDDLEWARE antes del moco")
	if (req.session.userLogged) {
		return res.redirect('/users/profile');
	}
	next();
}

module.exports = guestMiddleware;