import styled from 'styled-components';
import DeleteComments from './DeleteComment';
import EditComments from './EditComments';
import { useState } from 'react';

const CommentParent = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const CommentSection = styled.div`
	display: flex;
	align-content: flex-start;
`;

const DeleteEditContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 5px;
	column-gap: 10px;
	padding-bottom: 15px;
`;

const IndividualComment = ({ user, comment, fetchComments }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editComment, setEditComment] = useState(comment.newComment);
	const toggleIsEditing = () => {
		setIsEditing(!isEditing);
	};
	const handleEditComment = (e) => {
		e.preventDefault();

		fetch(`/comments/${comment.commentID}`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ newEdit: editComment }),
		})
			.then((res) => res.json())
			.then((data) => {
				toggleIsEditing();
				console.log(data, 'data');
				fetchComments();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<CommentParent>
			<div>
				<li>
					<b>
						<i>{comment.email}</i>{' '}
					</b>
					says :
					<CommentSection>
						{isEditing ? (
							<form onSubmit={handleEditComment}>
								<input
									type='text'
									value={editComment}
									onChange={(e) => setEditComment(e.target.value)}
								/>
								<button type='submit'>Submit!</button>
							</form>
						) : (
							` " ${comment.newComment} "`
						)}
					</CommentSection>
					<DeleteEditContainer>
						<DeleteComments
							commentID={comment.commentID}
							fetchComments={fetchComments}
						/>
						<EditComments
							toggleIsEditing={toggleIsEditing}
							commentID={comment.commentID}
							fetchComments={fetchComments}
						/>
					</DeleteEditContainer>
				</li>
			</div>
		</CommentParent>
	);
};

export default IndividualComment;
