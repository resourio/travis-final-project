import styled from 'styled-components';

const MediaContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	padding-top: 5em;
	row-gap: 1em;

	@media only screen and (max-width: 872px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		padding-top: 0em;
	}
`;

const Pictures = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 1em;
`;

const Clips = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 1em;
`;

const Media = () => {
	return (
		<>
			<MediaContent>
				<Pictures>
					<img
						src='.\assets\312403698_115515544677500_3131976684726216875_n.jpg'
						alt='Band and flower!x'
						height='200'
					></img>
					<img
						src='.\assets\357037421_243758791853174_8574507803918758208_n.jpg'
						alt='After show love'
						height='200'
					></img>

					<img
						src='.\assets\368026251_274646802097706_4145521736563205451_n.jpg'
						alt=" L'Esco!"
						height='200'
					></img>
					<img
						src='.\assets\387093321_17896212068883518_3051765934543644395_n.jpg'
						alt=' Evan and manager Navo!'
						height='200'
					></img>
					<img
						src='.\assets\418771673_1711498389339114_1356432025965302335_n.jpg'
						alt=' Upcoming single "Cigarette Queen"'
						height='200'
					></img>
				</Pictures>
				<Clips>
					<iframe
						width='315'
						height='480'
						src='https://www.youtube.com/embed/r2LeVbBnJ6w'
						title='January 23, 2024'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
					<iframe
						width='315'
						height='480'
						src='https://www.youtube.com/embed/JL35VpzPJyY'
						title='January 23, 2024'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
					<iframe
						width='315'
						height='480'
						src='https://www.youtube.com/embed/vHD522gUDOc'
						title='January 23, 2024'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
				</Clips>
			</MediaContent>
		</>
	);
};

export default Media;
