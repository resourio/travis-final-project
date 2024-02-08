import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Button = styled.button`
	border-radius: 6px;
	cursor: pointer;
`;

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	return isAuthenticated && <Button onClick={() => logout()}>Sign Out</Button>;
};

export default LogoutButton;
