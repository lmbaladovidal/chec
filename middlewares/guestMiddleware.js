<<<<<<< HEAD
function guestMiddleware(req, res, next) {
	console.log("Me pide que inicie sesion")
	if (req.session.userLogged) {
		return res.redirect('/users/profile');
	}
	next();
}

=======
function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/users/profile');
	}
	next();
}

>>>>>>> c91bd31f8660313e880d89c953306a408ac8c8e4
module.exports = guestMiddleware;