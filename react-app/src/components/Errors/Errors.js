import { useSelector } from "react-redux";
import styles from "./Errors.module.css";

const Errors = () => {
	const errors = useSelector((state) => state.errorReducer);

	return (
		<div>
			{errors?.map((error, ind) => (
				<div className={styles.error_div} key={ind}>
					{error}
				</div>
			))}
		</div>
	);
};

export default Errors;
