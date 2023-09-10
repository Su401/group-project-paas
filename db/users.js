const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcryptjs = require('bcrypt');

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		index: { unique: true },
	},
	password: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	birthday: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	userAddress: {
		type: String,
		required: true,
	},
	nif: {
		type: Number,
		required: true,
	},
	insurance: {
		name: {
			type: String,
			required: true,
		},
		policy: {
			type: Number,
			required: true,
		},
	},
	company: {
		name: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		cae: {
			type: Number,
			required: true,
		},
		nipc: {
			ype: Number,
			required: true,
		},
	},
});
console.log(userSchema);

userSchema.pre('save', async function (next) {
	const user = this;
	if (user.isModified('password')) {
		user.password = await bcryptjs.hash(user.password, 8);
	}
	next();
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
	bcryptjs.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

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
