import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faFacebook,
	faInstagram,
	faSpotify,
} from '@fortawesome/free-brands-svg-icons';

const SocialWrapper = styled.div`
	display: flex;
	padding-top: 0.5em;
	justify-content: center;
	align-items: flex-end;
	background: #dbdbdb;
	border-top: 3px solid #cdd0d4;
`;

const SocialIcons = styled.div`
	display: flex;
	flex-direction: row;
	padding: 25px 50px;

	a.social {
		margin: 0 1rem;
		transition: transform 200ms;
		display: inline-block;
	}
	a.youtube {
		color: #eb3223;
	}

	a.facebook {
		color: #4968ad;
	}

	a.instagram {
		color: black;
	}
	a.spotify {
		color: #1db954;
	}
	a.social:hover {
		transform: translateY(-3.5px);
	}
	a.social:active {
		color: gray;
	}
`;

const Social = () => {
	return (
		<SocialWrapper>
			<SocialIcons>
				<div>
					<a
						href='https://www.youtube.com/@Midnightcrawlband'
						target='_blank'
						rel='noreferrer'
						className='youtube social'
					>
						<FontAwesomeIcon icon={faYoutube} size='2x' />
					</a>
				</div>
				<div>
					<a
						href=' https://www.facebook.com/midnightcrawlband'
						target='_blank'
						rel='noreferrer'
						className='facebook social'
					>
						<FontAwesomeIcon icon={faFacebook} size='2x' />
					</a>
				</div>
				<div>
					<a
						href='https://www.instagram.com/midnight.crawl'
						target='_blank'
						rel='noreferrer'
						className='instagram social'
					>
						<FontAwesomeIcon icon={faInstagram} size='2x' />
					</a>
				</div>
				<div>
					<a
						href='https://open.spotify.com/track/2zpepzmbY2dpxO1OCa5Wu1?si=Uglzk34GSS2qIUi2hW9YRA&utm_source=copy-link&utm_medium=copy-link&_branch_match_id=1241202537800059150&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1g%2F1sIyKCsnxCXdJAgC3Q%2BCUIAAAAA%3D%3D&nd=1&dlsi=1a73a8e0baf24575'
						target='_blank'
						rel='noreferrer'
						className='spotify social'
					>
						<FontAwesomeIcon icon={faSpotify} size='2x' />
					</a>
				</div>
			</SocialIcons>
		</SocialWrapper>
	);
};
export default Social;
