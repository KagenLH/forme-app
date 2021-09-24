import styles from "./EditForm.module.css";
import EditFormContainer from "./EditFormContainer";

const EditForm = () => {
    return (
        <>
            <div className={styles.form_container}>
                <EditFormContainer />
            </div>
        </>
    );
};

export default EditForm;
