import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className=" container navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img className="navbar-logo"
                src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
            />
				
			</Link>
			<div className="ml-auto"> {/*boton dropdown favoritos */}
				<Link to="/demo">
					<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
						</ul>
					</div>

				</Link>
			</div>
		</nav>
	);
};
