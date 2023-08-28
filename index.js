const express = require('express');
const { sessionMiddleware } = require('./sessions');
const { openDbConnection, closeDbConnection } = require('./db');

const { user } = require('./controllers/users');

const { errorHandlerMiddleware } = require('./errors');

const app = express();
let db;

const initRequest = (req, res, next) => {
	// set the db connection in the "db" attribute of the request,
	// from now on I can access the database from the request
	req.db = db;
	next();
};

app.use(express.static('./public'));
app.use(express.json());
app.use(sessionMiddleware);
app.use(initRequest);

//users
app.post('/api/users', user);

// every err object has "message" attribute and "code" attribute
app.use(errorHandlerMiddleware);

app.get('/api/status', (req, res) => {
	res.status(200).json({
		status: 'up',
	});
});

const server = app.listen(3000, async () => {
	db = await openDbConnection();
});

server.on('close', async () => {
	await closeDbConnection();
});
