import styles from "./AuthHeader.module.css";
const AuthHeader = () => {
	return (
		<div className={styles.header_wrapper}>
			<div className={styles.logo}>FORMe!</div>
		</div>
	);
};

export default AuthHeader;
