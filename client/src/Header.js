import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Title = styled.h1`
	display: flex;
	justify-content: center;
	font-family: Brush Script MT, Brush Script Std, cursive;
	padding-bottom: 1em;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: baseline;
	align-content: center;
	padding-bottom: 10px;
`;

const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	width: 30em;
	text-decoration: none;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		width: auto;
	}
`;

const Link = styled(NavLink)`
	text-decoration: none;
	font-family: Georgia, serif;
	font-size: 2em;
`;

const Header = () => {
	return (
		<>
			<Title>Midnight Crawl</Title>
			<Wrapper>
				<Navbar>
					<Link
						to='/'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Home
					</Link>
					<Link
						to='/Media'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Media
					</Link>
					<Link
						to='/Merch'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Merch
					</Link>
					<Link
						to='/Contact'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Contact
					</Link>
				</Navbar>
			</Wrapper>
		</>
	);
};

export default Header;
