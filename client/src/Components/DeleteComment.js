import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const DeleteButton = styled.button``;

const DeleteComments = ({ commentID, fetchComments }) => {
	const { user } = useAuth0();

	const handleDeleteComment = (e) => {
		e.preventDefault();

		fetch(`/comments/${commentID}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({}),
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

	return <DeleteButton onClick={handleDeleteComment}>Delete!</DeleteButton>;
};

export default DeleteComments;
