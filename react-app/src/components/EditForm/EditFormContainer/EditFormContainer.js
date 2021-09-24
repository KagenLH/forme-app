import styles from "./EditFormContainer.module.css";
import TopBar from "../../CreateForm/FormContainer/TopBar";
import EditFormEngine from "./EditFormEngine/EditFormEngine";

const EditFormContainer = () => {
	return (
		<div className={styles.form_wrapper}>
			<TopBar />
			<EditFormEngine />
		</div>
	);
};

export default EditFormContainer;