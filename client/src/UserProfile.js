import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import styled from 'styled-components';

const UserProfileInfo = styled.div`
	align-items: center;
`;
const UserProfile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		<>
			{isAuthenticated && (
				<UserProfileInfo>
					<ul>
						User Name: <b>{user.name}</b>
					</ul>
					<ul>
						User Email:<b> {user.email}</b>
					</ul>
					<img src={user.picture} alt='User profile' height='100'></img>
				</UserProfileInfo>
			)}
		</>
	);
};

export default UserProfile;
