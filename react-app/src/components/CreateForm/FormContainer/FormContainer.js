import styles from "./FormContainer.module.css";
import TopBar from "./TopBar/TopBar";
import FormEngine from "./FormEngine/FormEngine";

const FormContainer = () => {
	return (
		<div className={styles.form_wrapper}>
			<TopBar />
			<FormEngine />
		</div>
	);
};

export default FormContainer;
