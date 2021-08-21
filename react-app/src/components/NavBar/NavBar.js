import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton/LogoutButton";
import { useSelector } from "react-redux";

import logoRed from "../../assets/images/forme-logo.png";
import logoWhite from "../../assets/images/forme-logo-white.png";
import "./NavBar.css";

const NavBar = () => {
	const user = useSelector((store) => store.session.user);
	const loggedInNavbarClasses = "navbar-container navbar-container-loggedin";
	const loggedOutNavbarClasses =
		"navbar-container navbar-container-loggedout";

	return (
		<nav className={user ? loggedInNavbarClasses : loggedOutNavbarClasses}>
			<NavLink
				to={user ? "/forms" : "/"}
				exact={true}
				activeClassName="active"
				className="navbar-links-home">
				{/* <img className="navbar-logo" src={logoRed} alt="\A" /> */}
				<img
					className="navbar-logo"
					src={user ? logoWhite : logoRed}
					alt="\A"
				/>
			</NavLink>
			<ul className="navbar-links">
				<li>
					{/* <NavLink to='/users' exact={true} activeClassName='active' className="navbar-link">
            Users
          </NavLink> */}
					{/* {user ? (
            <NavLink to="/forms" activeClassName='active' className="navbar-link">
              Forms
            </NavLink>
          ) : ( null )
          } */}
				</li>
			</ul>
			<ul className="navbar-auth-links">
				<li>
					{user === null ? (
						<NavLink
							to="/sign-up"
							exact={true}
							className="navbar-auth-links-signup">
							<span className="navbar-signup-text">Sign Up</span>
						</NavLink>
					) : null}
				</li>
				{user === null ? (
					<li>
						<NavLink
							to="/login"
							exact={true}
							className="navbar-auth-links-login">
							<span
								className="navbar-login-text"
								onMouseEnter={(e) =>
									(e.target.innerText = "RAWRR!")
								}
								onMouseLeave={(e) =>
									(e.target.innerText = "Login")
								}>
								Login
							</span>
						</NavLink>
					</li>
				) : (
					<li navbar-auth-links-logout="true">
						<NavLink
							to="/forms"
							activeClassName="active"
							className="navbar-link">
							Forms
						</NavLink>
						<LogoutButton />
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
