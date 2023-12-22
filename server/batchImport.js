const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const dataMerch = require('./data/merch.json');
const dataPictures = require('./data/pictures.json');
const dataUsers = require('./data/users.json');

const batchImport = async () => {
	const client = new MongoClient(MONGO_URI, options);

	try {
		await client.connect();
		console.log('connected!');
		const db = client.db('FinalProject');
		const resultMerch = await db.collection('Merch').insertMany(dataMerch);
		const resultPictures = await db
			.collection('Pictures')
			.insertMany(dataPictures);
		const resultUsers = await db.collection('Users').insertMany(dataUsers);
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
		console.log('disconnected!');
	}
};

batchImport();
