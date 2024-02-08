import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Button = styled.button`
	border-radius: 6px;
	cursor: pointer;
`;

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

	return (
		!isLoading &&
		!isAuthenticated && (
			<Button onClick={() => loginWithRedirect()}>
				Sign In / Create Account
			</Button>
		)
	);
};

export default LoginButton;
