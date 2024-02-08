const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const { MONGO_URI } = process.env;
const { MongoClient } = require('mongodb');
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const authenticateUser = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const { email } = req.body;

	try {
		await client.connect();
		const db = client.db('FinalProject');
		console.log(`createUser connected`);
		const duplicateEmail = await db
			.collection('Users')
			.findOne({ email: email });

		if (email.length && !duplicateEmail) {
			const result = await db.collection('Users').insertOne({ email: email });

			result.insertedId
				? res.status(201).json({
						status: 201,
						data: email,
						message: `User "${email}" created`,
				  })
				: res.status(404).json({
						status: 404,
						data: req.body,
						message: `User already exists`,
				  });
		} else {
			res
				.status(404)
				.json({ status: 404, data: req.body, message: `User already exists` });
		}
	} catch (error) {
		console.log(error);
		if (error.code === 11000) {
			// duplicate key
			res.status(404).json({
				status: 404,
				data: _id,
				message: ` ${_id} already exists`,
			});
		} else {
			res.status(500).json({ status: 500, data: req.body, message: error });
		}
	} finally {
		client.close();
		console.log(` createUser disconnected!`);
	}
};

const submitComment = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);

	const { newComment, email } = req.body;

	try {
		await client.connect();
		const db = client.db('FinalProject');
		console.log(`submitComment connected`);

		if (newComment.length) {
			const commentID = uuidv4();
			const result = await db
				.collection('Comments')
				.insertOne({ newComment, email, commentID });
			console.log(commentID);
			result.insertedId
				? res.status(201).json({
						status: 201,
						data: newComment,
						message: 'Comment posted',
				  })
				: res.status(404).json({
						status: 404,
						data: 'Not found',
						message: `Where's the comment?!`,
				  });
		} else {
			res.status(404).json({
				status: 404,
				data: 'Not found',
				message: `Where's the comment?!`,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, data: req.body, message: error });
	} finally {
		client.close();
		console.log(` submitComment disconnected!`);
	}
};

const getComments = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	try {
		await client.connect();

		const db = client.db('FinalProject');
		console.log(`getComments connected `);

		const result = await db.collection('Comments').find().toArray();

		return result
			? res.status(200).json({
					status: 200,
					data: result,
					message: `This is the list of all the Comments.`,
			  })
			: res.status(404).json({ status: 404, data: ['Not Found'] });
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
		console.log(`getComments disconnected!`);
	}
};

const editComment = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const { newEdit } = req.body;
	const { commentID } = req.params;

	try {
		await client.connect();
		const db = client.db('FinalProject');
		console.log(`editComment connected`);
		const oldComment = await db.collection('Comments').findOne({ commentID });
		if (oldComment) {
			const result = await db
				.collection('Comments')
				.updateOne({ commentID }, { $set: { newComment: newEdit } });
			console.log(oldComment);
			console.log(newEdit, 'newEdit');
			result.modifiedCount
				? res.status(201).json({
						status: 201,
						data: req.body,
						message: 'Comment edited',
				  })
				: res.status(404).json({
						status: 404,
						data: req.body,
						message: `Comment not edited.`,
				  });
		} else {
			res.status(404).json({
				status: 404,
				data: req.body,
				message: `Comment not edited.`,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, data: req.body, message: error });
	} finally {
		client.close();
		console.log(` editComment disconnected`);
	}
};

const deleteComment = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const { commentID } = req.params;

	try {
		await client.connect();
		const db = client.db('FinalProject');
		console.log(`deleteComment connected`);
		const result = await db.collection('Comments').deleteOne({ commentID });
		console.log(result);
		result && result.deletedCount
			? res.status(201).json({
					status: 201,
					data: req.body,
					message: 'Comment deleted',
			  })
			: res.status(404).json({
					status: 404,
					data: req.body,
					message: `Comment not deleted.`,
			  });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, data: req.body, message: error });
	} finally {
		client.close();
		console.log(` deleteComment disconnected`);
	}
};

module.exports = {
	authenticateUser,
	submitComment,
	getComments,
	editComment,
	deleteComment,
};
