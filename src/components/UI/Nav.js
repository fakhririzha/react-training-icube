import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
	return (
		<div className="navbar__wrapper">
			<nav className="navbar__nav">
				<ul className="navbar__logo"></ul>
				<ul className="navbar__items">
					<li className="navbar__item">
						<Link to="/">Home</Link>
					</li>
					<li className="navbar__item">
						<Link to="/categories">Categories</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
