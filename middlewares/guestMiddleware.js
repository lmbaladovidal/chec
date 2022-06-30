function guestMiddleware(req, res, next) {
	console.log("pase por GUESTMIDDLEWARE porque no recorde usuario")
	if (req.session.userLogged) {
		return res.redirect('/users/profile');
	}
	next();
}

module.exports = guestMiddleware;