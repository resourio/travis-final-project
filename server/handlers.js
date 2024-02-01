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
			const result = await db
				.collection('Comments')
				.insertOne({ newComment, email });

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

const editComment = async (req, res) => {
	const client = new MongoClient(MONGO_URI, options);
	const { newComment } = req.body;
	const originalComment = db.collection('Comments').findOne({ _id });

	try {
		await client.connect();
		const db = client.db('FinalProject');
		console.log(`editComment connected`);

		if (originalComment) {
			let newValues = {};
			if (newComment.length) {
				newValues = {
					$set: { originalComment: newComment },
				};

				const filter = { _id: _id };

				const result = await db
					.collection('Comments')
					.updateOne(filter, newValues);
			}

			result.modifiedCount
				? res.status(201).json({
						status: 201,
						data: comments,
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
	const _id = req.params.commentID;
	const commentToDelete = db.collection('Comments').findOne({ _id });

	try {
		await client.connect();
		const db = client.db('FinalProject');
		console.log(`deleteComment connected`);

		if (commentToDelete) {
			const result = await db.collection('Comments').deleteOne({ _id });

			result.deletedCount
				? res.status(201).json({
						status: 201,
						data: comments,
						message: 'Comment deleted',
				  })
				: res.status(404).json({
						status: 404,
						data: req.body,
						message: `Comment not deleted.`,
				  });
		} else {
			res.status(404).json({
				status: 404,
				data: req.body,
				message: `Comment not deleted.`,
			});
		}
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
	editComment,
	deleteComment,
};
