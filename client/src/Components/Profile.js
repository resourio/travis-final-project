import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Greeting = styled.p`
	padding-left: 1em;
`;

const Profile = () => {
	const { user, isAuthenticated, isLoading, error } = useAuth0();
	return (
		<div>
			{!error && isLoading && <p> Loading...</p>}
			{error && <p> Authentication Error!</p>}
			{isAuthenticated && (
				<Greeting>
					Greetings <i>{user.name} </i>!
				</Greeting>
			)}
		</div>
	);
};

export default Profile;
