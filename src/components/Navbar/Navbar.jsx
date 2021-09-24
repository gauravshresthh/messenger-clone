import { Link } from 'react-router-dom';
import logo from '../../assets/images/facebook-logo.svg';
import logoHome from '../../assets/icons/home.svg';
import logoFriends from '../../assets/icons/friends.svg';
import logoGroup from '../../assets/icons/group.svg';
import logoMarket from '../../assets/icons/store.svg';
import logoWatch from '../../assets/icons/youtube.svg';
import './Navbar.css';
import Logo from '../Logo';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm">
			<div className="d-flex align-items-center justify-content-around">
				<div>
					<Link className="navbar-brand mx-2" to="/">
						<img src={logo} alt="logo" width={60} height={60} />
					</Link>
				</div>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNav">
					<ul className="navbar-nav shadow-none d-flex align-items-center">
						<li className="nav-item">
							<input
								className="form-control rounded-pill searchBar"
								type="search"
								placeholder="Search Facebook"
								aria-label="Search"
							/>
						</li>
						<li className="nav-item mx-5">
							<img src={logoHome} alt="home logo" style={{ height: '30px' }} />
						</li>
						<li className="nav-item mx-5">
							<img
								src={logoFriends}
								alt="home logo"
								style={{ height: '30px' }}
							/>
						</li>
						<li className="nav-item mx-5">
							<img src={logoWatch} alt="home logo" style={{ height: '30px' }} />
						</li>
						<li className="nav-item mx-5">
							<img
								src={logoMarket}
								alt="home logo"
								style={{ height: '30px' }}
							/>
						</li>
						<li className="nav-item mx-5">
							<img src={logoGroup} alt="home logo" style={{ height: '30px' }} />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
