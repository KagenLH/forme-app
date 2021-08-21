import styles from "./TopBar.module.css";
import { Link, Redirect } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/session";
import logo from "../../../../assets/images/templogo.svg";

const TopBar = () => {
	const dispatch = useDispatch();
	const onLogout = async (e) => {
		await dispatch(logout());
		<Redirect to="/" />;
	};
	return (
		<div className={styles.topbar}>
			<div className={styles.left_container}>
				<Link to="/forms">
					<img className={styles.logo} src={logo} alt="logo" />
				</Link>
			</div>
			<div className={styles.right_container}>
				<ul className={styles.right_list}>
// 					<li className={styles.options_list}>
// 						<Link to="/users" className={styles.options_link}>
// 							Users
// 						</Link>
// 					</li>
					<li className={styles.options_list}>
						{/* <Link className={styles.options_link}>Logout</Link> */}
						<button
							className={styles.options_link}
							onClick={onLogout}>
							Logout
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TopBar;
