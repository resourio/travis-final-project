import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain='dev-p0r5245dqh32fu3h.us.auth0.com'
		clientId='hjyuFWNyEw7RGZ7XL0cwymyDLNI32TMr'
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
);
