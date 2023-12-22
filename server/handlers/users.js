require('dotenv').config();

const { MONGO_URI } = process.env;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
const { MongoClient } = require('mongodb');
