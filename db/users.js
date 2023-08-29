const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcryptjs = require('bcrypt');
require('../config/db.js');
// funcao incript pass

const userSchema = new Schema({
	username: String,
	//pass: funcao
	fullName: String,
	birthday: Date,
	email: String,
	phone: Number,
	role: String,
	address: String,
	nif: Number,
	insurance: {
		name: String,
		policy: Number,
	},
	company: {
		name: String,
		address: String,
		cae: Number,
		nipc: Number,
	},
});
console.log(userSchema);

const User = model('User', userSchema, 'users');

module.exports = {
	User,
};
/* const createUser = async (db, username, password) => {
	const usersCollection = db.collection('users');
	const user = {
		username,
		password,
	};
	await usersCollection.insertOne(user);
	return user;
};

const addUserInfo = async (db, username) => {
	const usersCollection = db.collection('users');
	await usersCollection.updateOne(
		{ username: username },
		{
			$set: {
				fullName,
				birthday,
				email,
				phone,
				role,
				nif,
				userAddress,
				insuranceName,
				insurancePolicy,
				companyName,
				companyAddress,
				companyCAE,
				companyNIPC,
			},
		}
	);
};

const getUserByUsername = async (db, username) => {
	const usersCollection = db.collection('users');
	const user = await usersCollection.findOne(
		{ username },
		{
			projection: {
				password: 0,
			},
		}
	);
	return user;
};

const getAllUsers = async (db) => {
	const usersCollection = db.collection('users');
	const users = await usersCollection.find({}).toArray();
	return users;
}; 
module.exports = {
	createUser,
	getUserByUsername,
	addUserInfo,
	getAllUsers,
};
*/

//<-------CREATE UPDATE PASSWORD-------->
