import styled from 'styled-components';

const HomeContent = styled.div`
	justify-content: center;
`;

const Homepage = () => {
	return (
		<>
			<HomeContent>
				<p>WELCOME! (This is the home page)</p>
				<p> There will soon be news here.</p>
			</HomeContent>
		</>
	);
};

export default Homepage;
