import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DisplayComments from './Components/DisplayComments';
import { useAuth0 } from '@auth0/auth0-react';

const ButtonSection = styled.div`
	padding-bottom: 4em;
`;

const Comment = () => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
	const { user, isAuthenticated } = useAuth0();
	const fetchComments = () => {
		fetch('http://localhost:3000/getcomments')
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 400 || data.status === 500) {
					throw new Error(data.message);
				} else {
					setComments(data.data);
					console.log(data.data);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const handleCommentSubmit = (e) => {
		e.preventDefault();

		if (newComment.trim() !== '')
			fetch('/comment', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ newComment: newComment, email: user.email }),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data, 'data');
					fetchComments();
				})
				.catch((error) => {
					console.log(error);
				});
	};

	return (
		isAuthenticated && (
			<div>
				<h2>Comments</h2>

				<ButtonSection>
					<form onSubmit={handleCommentSubmit}>
						<label>
							New Comment:
							<input
								type='text'
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
							/>
						</label>
						<button type='submit'>Submit!</button>
					</form>
				</ButtonSection>
				<div>
					<DisplayComments comments={comments} fetchComments={fetchComments} />
				</div>
			</div>
		)
	);
};
export default Comment;
