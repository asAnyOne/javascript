import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<div className="logo-container">
					<Link to="/">
						<CrownLogo className="logo" />
					</Link>
				</div>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
