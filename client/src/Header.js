import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';

const Title = styled.h1`
	display: flex;
	justify-content: center;
	font-family: Papyrus;
	font-size: 5em;
	flex: 1;
`;

const TitleWrapper = styled.div`
	display: flex;
	background-color: #a0290b;
	@media only screen and (max-width: 1200px) {
		display: block;
	}
`;

const LoginWrapper = styled.div`
	display: flex;
	padding-bottom: 2em;
	align-items: center;
	justify-content: center;
	position: relative;
	/* right: 10em; */
`;

const GreetingWrapper = styled.div`
	flex-direction: row;
`;

const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: baseline;
	align-content: flex-start;
	padding-bottom: 2em;
	padding-top: 3em;
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
			<TitleWrapper>
				<Title>Midnight Crawl</Title>
				<LoginWrapper>
					<LoginButton />
					<GreetingWrapper>
						<LogoutButton />
						<Profile />
					</GreetingWrapper>
				</LoginWrapper>
			</TitleWrapper>
			<NavWrapper>
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
			</NavWrapper>
		</>
	);
};

export default Header;
