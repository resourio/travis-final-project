import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const EditComment = ({ commentID, fetchComments, toggleIsEditing }) => {
	const { user } = useAuth0();

	return <button onClick={toggleIsEditing}>Edit</button>;
};

export default EditComment;
