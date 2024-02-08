import styled from 'styled-components';

const HomeContent = styled.div`
	justify-content: center;
`;

const Homepage = () => {
	return (
		<>
			<HomeContent>
				<p>WELCOME! Plenty of news coming up.</p>
				<iframe
					width='315'
					height='560'
					src='https://www.youtube.com/embed/EeqRRhp_vQQ'
					title='February 3, 2024'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen
				></iframe>
				<p> Teaser for upcoming EP.</p>
			</HomeContent>
		</>
	);
};

export default Homepage;
