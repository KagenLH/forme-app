import styles from "./ContentWrap.module.css";

const ContentWrap = ({ children }) => {
	return <div className={styles.content_wrap}>{children}</div>;
};

export default ContentWrap;
