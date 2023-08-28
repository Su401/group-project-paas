const { MongoClient } = require('mongodb');

const usersModule = require('./users');

const url =
	'mongodb+srv://susana_silva:NTmF9V20QcXF25Hg@project.dmf683l.mongodb.net/';
const client = new MongoClient(url);

const openDbConnection = async () => {
	await client.connect();
	const db = client.db('paas');
	return db;
};

const closeDbConnection = async () => {
	await client.close();
};

module.exports = {
	openDbConnection,
	closeDbConnection,
	...usersModule,
};
