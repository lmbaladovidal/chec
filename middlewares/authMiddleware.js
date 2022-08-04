function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {         // si no hay nadie en sesión (! niega)
		return res.redirect('/users/login');  // redirigir al login
	}
	next();
}

module.exports = authMiddleware;