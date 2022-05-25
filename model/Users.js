const fs = require('fs');
const path = require('path');


const User = {
	fileName: './DataBase/users/BDUsuarios.json',

	getData: function () {
				return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},
//genera id para crear un usuario porque el id no viene del form
	generateId: function () {    
		let allUsers = this.findAll(); //obtiene todos los usuarios
		let lastUser = allUsers.pop(); //retorna el último en una variable local, no modifica la db
		if (lastUser) {
			return lastUser.id + 1; // le suma 1 al id del último usuario si encontró algo
		}
		return 1;  // si el archivo de usuarios está vacío, retorna id 1
	},

	findAll: function () {
		return this.getData();
	},
// 3. Buscar a un usuario por su id
	findByPk: function (id) {       
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},
// 2. Buscar al usuario que se quiere loguear por su email (field es la propiedad del objeto)
	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},
// 1. Guardar al usuario en la DB
	create: function (userData) {              //1. Guardar al usuario en la DB
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),  //asigna el id al nuevo usuario con generateId
			...userData             // spread operatos para userData que es el resto de la info del user
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},
// 5. Eliminar a un usuario de la DB
	delete: function (id) {
		let allUsers = this.findAll();    //llama a todos los usuarios
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);  //devuelve a todos menos al del id enviado
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

module.exports = User;