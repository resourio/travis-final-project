import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Button = styled.button`
	/* box-shadow: 0 0 0 0.5em gray; */
`;

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

	return (
		!isLoading &&
		!isAuthenticated && (
			<Button onClick={() => loginWithRedirect()}>Sign In</Button>
		)
	);
};

export default LoginButton;
