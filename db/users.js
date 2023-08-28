const { ObjectId } = require('mongodb');

const createUser = async (db, username, password) => {
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

//<-------CREATE UPDATE PASSWORD-------->
