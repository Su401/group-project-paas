// Requiring module
const mongoose = require('mongoose');
//const { Schema, model } = mongoose;
const usersModule = require('./users');

const url =
	'mongodb+srv://susana_silva:NTmF9V20QcXF25Hg@project.dmf683l.mongodb.net/paas';

const openDbConnection = async function main() {
	await mongoose.connect(url);
	console.log('Connected to MongoDB');
};

const closeDbConnection = async () => {
	await mongoose.close();
};

// Creating Schemas
/* 
const postSchema = new mongoose.Schema({
	title: String,
	postedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

// Creating models from userSchema and postSchema
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// Query to find and show all the posts
Post.find()
	.then((p) => console.log(p))
	.catch((error) => console.log(error)); */

module.exports = {
	openDbConnection,
	closeDbConnection,
	...usersModule,
};
