import Link from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img
						src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
						alt="logo"
						width={30}
						height={30}
					/>
				</Link>
			</div>
		</nav>
	);
}
