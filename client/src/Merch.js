import styled from 'styled-components';

const MerchContent = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2em;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding-top: 5em;
	@media only screen and (max-width: 872px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		padding-top: 0em;
	}
`;

const Merch = () => {
	return (
		<>
			<MerchContent>
				<p>pins!</p>
				<img
					src='.\assets\413269498_3279966188969180_4506070206685212840_n.jpg'
					alt='Band Logo Pin'
					height='200'
				></img>
				<img
					src='.\assets\413282200_2604271683062276_7134277161014859830_n.jpg'
					alt='Band Logo Sticker'
					height='200'
				></img>
				<p>stickers!</p>
			</MerchContent>
			<p>Fun!</p>
		</>
	);
};

export default Merch;
