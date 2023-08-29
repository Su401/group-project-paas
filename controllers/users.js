const { User } = require('../db');

const userController = async (req, res, next) => {
	const username = req.body.username;
	//const password = req.body.password;
	const fullName = req.body.fullName;
	const birthday = req.body.birthday;
	const email = req.body.email;
	const phone = req.body.phone;
	const role = req.body.role;
	const nif = req.body.nif;
	const userAddress = req.body.userAddress;
	const insuranceName = req.body.insuranceName;
	const insurancePolicy = req.body.insurancePolicy;
	const companyName = req.body.companyName;
	const companyAddress = req.body.companyAddress;
	const companyCAE = req.body.companyCAE;
	const companyNIPC = req.body.companyNIPC;

	const user = await User.create({
		username: username,
		fullName: fullName,
		birthday: birthday,
		email: email,
		phone: phone,
		role: role,
		address: userAddress,
		nif: nif,
		insurance: {
			name: insuranceName,
			policy: insurancePolicy,
		},
		company: {
			name: companyName,
			address: companyAddress,
			cae: companyCAE,
			nipc: companyNIPC,
		},
	});

	console.log(user);

	return user;
};

module.exports = {
	userController,
};
/* 
const createUserController = async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	// request.db is set in the "initRequest" middleware in "index.js"
	const user = await getUserByUsername(req.db, username);
	if (!user) {
		const createdUser = await createUser(req.db, username, password);
		res.json({
			_id: createdUser._id,
			username: user.username,
		});
	} else {
		// res.status(400);
		// res.json({
		//   errorMessage: 'User already exists',
		// });

		// error will also contain file and line number of where the error
		// occurred
		const error = new Error('User already exists');
		error.code = 400;
		next(error);
	}
};

const addUserInfoController = async (req, res) => {
	const username = req.params.username;
	const fullName = req.body.fullName;
	const birthday = req.body.birthday;
	const email = req.body.email;
	const phone = req.body.phone;
	const role = req.body.role;
	const nif = req.body.nif;
	const userAddress = req.body.userAddress;
	const insuranceName = req.body.insuranceName;
	const insurancePolicy = req.body.insurancePolicy;
	const companyName = req.body.companyName;
	const companyAddress = req.body.companyAddress;
	const companyCAE = req.body.companyCAE;
	const companyNIPC = req.body.companyNIPC;
	const user = await getUserByUsername(req.db, username);
	if (!user) {
		res.status(400);
		res.json({
			errorMessage: 'User does not exist',
		});
	} else {
		await addUserInfo(req.db, username);
		const updatedUser = await getUserByUsername(req.db, username);
		res.json({
			_id: updatedUser._id,
			username: username,
			fullName: fullName,
			birthday: birthday,
			email: email,
			phone: phone,
			role: role,
			nif: nif,
			userAddress: userAddress,
			insuranceName: insuranceName,
			insurancePolicy: insurancePolicy,
			companyName: companyName,
			companyAddress: companyAddress,
			companyCAE: companyCAE,
			companyNIPC: companyNIPC,
		});
	}
};

const getCurrentUserController = async (req, res) => {
	const user = req.session.user;
	res.json({
		_id: user._id,
		username: user.username,
	});
};

const getAllUsersController = async (req, res) => {
	const users = await getAllUsers(req.db);
	res.json(users);
};

module.exports = {
	createUserController,
	getCurrentUserController,
	addUserInfoController,
	getAllUsersController,
};
 */
