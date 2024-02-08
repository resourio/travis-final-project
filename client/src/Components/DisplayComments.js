import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import IndividualComment from './IndividualComment';

const ParentContainer = styled.div`
	padding-bottom: 2em;
`;

const DisplayComments = ({ comments, fetchComments }) => {
	const { user } = useAuth0();

	return (
		<ParentContainer>
			<>
				{comments.map((comment) => {
					return (
						<IndividualComment
							user={user}
							comment={comment}
							fetchComments={fetchComments}
						/>
					);
				})}
			</>
		</ParentContainer>
	);
};

export default DisplayComments;
