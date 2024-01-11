import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		!isAuthenticated && (
			<button onClick={() => loginWithRedirect()}>Sign In</button>
		)
	);
};

export default LoginButton;
