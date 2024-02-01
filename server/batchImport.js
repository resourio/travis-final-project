const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const dataComments = require('./data/comments.json');
const dataUsers = require('./data/users.json');

const batchImport = async () => {
	console.log(MONGO_URI);
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log('connected!');
		const db = client.db('FinalProject');

		const resultComments = await db
			.collection('Comments')
			.insertMany(dataComments);

		const resultUsers = await db.collection('Users').insertMany(dataUsers);
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
		console.log('disconnected!');
	}
};

batchImport();
