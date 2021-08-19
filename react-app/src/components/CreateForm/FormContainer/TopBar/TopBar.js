import styles from "./TopBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/templogo.svg";

const TopBar = () => {
	return (
		<div className={styles.topbar}>
			<div className={styles.topbar_container}>
				<div className={styles.left_container}>
					<Link to="/">
						<img className={styles.logo} src={logo} alt="logo" />
					</Link>
				</div>
				<div className={styles.right}>
					<ul className={styles.right_container}>
						<li className={styles.options_list}>
							<Link className={styles.options_link}>Logout</Link>
						</li>
						<li className={styles.options_list}>
							<Link className={styles.options_link}>Users</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
