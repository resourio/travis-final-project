import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

const Title = styled.div`
	display: flex;
	justify-content: center;
	font-family: Papyrus;
	font-size: 5em;
	flex: 1;
`;

const TitleWrapper = styled.div`
	display: flex;
	background-color: #a0290b;
	border-bottom: 2px solid gray;
	@media only screen and (max-width: 1200px) {
		display: block;
	}
`;

const LoginWrapper = styled.div`
	display: flex;
	padding-top: 2em;
	align-items: center;
	justify-content: center;
	position: relative;
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
	padding-top: 1.5em;
	background: #dbdbdb;
	border-bottom: 2px solid #cdd0d4;
	padding-bottom: 0.2em;
`;

const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	width: 30em;
	text-decoration: none;
	width: 60%;
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		justify-content: center;
		width: auto;
	}
`;

const Link = styled(NavLink)`
	text-decoration: none;
	font-family: Georgia, serif;
	font-size: 1.5em;
	color: #570b06;
	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
	}
	a.nav_link:hover {
		color: red;
	}
`;

const Header = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<>
			<TitleWrapper>
				<Title>
					<img
						src='.\assets\IMG_05771.jpg'
						alt='Band Logo'
						height='300'
						width='640'
					></img>
				</Title>
			</TitleWrapper>

			<NavWrapper>
				<Navbar>
					<Link
						to='/'
						style={({ isActive, isPending, isTransitioning }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
								color: isPending ? 'red' : 'black',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Home
					</Link>
					<Link
						to='/Media'
						style={({ isActive, isPending, isTransitioning }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
								color: isPending ? 'red' : 'black',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Media
					</Link>
					<Link
						to='/Merch'
						style={({ isActive, isPending, isTransitioning }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
								color: isPending ? 'red' : 'black',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Merch
					</Link>
					{isAuthenticated && (
						<>
							<Link
								to='/Comment'
								style={({ isActive, isPending, isTransitioning }) => {
									return {
										fontWeight: isActive ? 'bold' : '',
										color: isPending ? 'red' : 'black',
										borderBottom: isActive ? '3px solid black' : '',
									};
								}}
							>
								Comment
							</Link>
							<Link
								to='/UserProfile'
								style={({ isActive, isPending, isTransitioning }) => {
									return {
										fontWeight: isActive ? 'bold' : '',
										color: isPending ? 'red' : 'black',
										borderBottom: isActive ? '3px solid black' : '',
									};
								}}
							>
								UserProfile
							</Link>
						</>
					)}
				</Navbar>
			</NavWrapper>
			<LoginWrapper>
				<LoginButton />
				<GreetingWrapper>
					<LogoutButton />
					<Profile />
				</GreetingWrapper>
			</LoginWrapper>
		</>
	);
};

export default Header;
