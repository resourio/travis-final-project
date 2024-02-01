import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Homepage from './Homepage';
import Merch from './Merch';
import Media from './Media';
import Comment from './Comment';
import Header from './Header';
import Social from './Components/Social';
import GlobalStyle from './GlobalStyle';
import UserProfile from './UserProfile';

//create new user upon unique email sign in
const App = () => {
	const { user, isAuthenticated } = useAuth0();

	useEffect(() => {
		console.log(isAuthenticated, 'isAuthenticated');
		fetch('/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, 'data');
			});
	}, [user, isAuthenticated]);

	return (
		<>
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
					<Route path='/Comment' element={<Comment />} />
					<Route path='/UserProfile' element={<UserProfile />} />
				</Routes>
			</Router>
			<Social />
		</>
	);
};

export default App;
