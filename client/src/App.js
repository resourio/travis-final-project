import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Homepage from './Homepage';
import Merch from './Merch';
import Media from './Media';
import Contact from './Contact';
import Header from './Header';
import Social from './Components/Social';
import GlobalStyle from './GlobalStyle';

const App = () => {
	useEffect(() => {
		fetch('/bacon')
			.then((res) => res.json())
			.then((data) => console.log(data.data));
		console.log('Use effect has triggered!');
	}, []);

	return (
		<Auth0Provider
			domain='dev-p0r5245dqh32fu3h.us.auth0.com'
			clientId='hjyuFWNyEw7RGZ7XL0cwymyDLNI32TMr'
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<GlobalStyle />
			<Router>
				<script
					src='https://kit.fontawesome.com/e86b79abd1.js'
					crossorigin='anonymous'
				></script>
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/Merch' element={<Merch />} />
					<Route path='/Media' element={<Media />} />
					<Route path='/Contact' element={<Contact />} />
				</Routes>
			</Router>
			<Social />
		</Auth0Provider>
	);
};

export default App;
