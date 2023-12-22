import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Homepage from './Homepage';
import Merch from './Merch';
import Media from './Media';
import Contact from './Contact';
import Header from './Header';

const App = () => {
	useEffect(() => {
		fetch('/bacon')
			.then((res) => res.json())
			.then((data) => console.log(data.data));
	}, []);

	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/Merch' element={<Merch />} />
					<Route path='/Media' element={<Media />} />
					<Route path='/Contact' element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
