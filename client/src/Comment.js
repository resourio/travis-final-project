import React, { useState } from 'react';
import styled from 'styled-components';

import { useAuth0 } from '@auth0/auth0-react';

const ContactContent = styled.div`
	display: flex;
	justify-content: center;
`;

const Comment = () => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
	const { user, isAuthenticated } = useAuth0();

	const HandleCommentSubmit = (e) => {
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
					console.log(user.email);
				});
		setNewComment('');
		{
			setComments([...comments, newComment]);
			setNewComment('');
		}
	};

	return (
		isAuthenticated && (
			<div>
				<div>
					<h2>Comments</h2>
					<ul>
						{comments.map((comment, index) => (
							<p key={index}>
								<img src={user.picture} alt='User Photo' height='40'></img>{' '}
								<i>{user.name}</i> says:"{comment}"
							</p>
						))}
					</ul>
				</div>

				<form onSubmit={HandleCommentSubmit}>
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
			</div>
		)
	);
};
export default Comment;
