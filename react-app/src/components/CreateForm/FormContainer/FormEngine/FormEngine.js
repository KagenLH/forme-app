import styles from "./FormEngine.module.css";
import { useState } from "react";

const FormEngine = () => {
	const [activeTab, setActiveTab] = useState("add");

	const toggleTab = (tab) => {
		if (tab === "add") {
			setActiveTab("add");
		}
		if (tab === "field") {
			setActiveTab("field");
		}
		if (tab === "form") {
			setActiveTab("form");
		}
	};

	return (
		<div className={styles.engine_container}>
			<div className={styles.settings_panel}>
				<ul className={styles.tabs}>
					<li
						onClick={() => {
							toggleTab("add");
						}}
						className={styles.field_settings}>
						{activeTab === "add" ? (
							<span className={styles.caret}>
								<i class="fas fa-caret-down"></i>
							</span>
						) : (
							<span className={styles.caret}>
								<i className={"fas fa-caret-right"}></i>
							</span>
						)}
						<span className={styles.option_text}>Add a Field</span>
					</li>
					<li
						onClick={() => {
							toggleTab("field");
						}}
						className={styles.field_settings}>
						{activeTab === "field" ? (
							<span className={styles.caret}>
								<i class="fas fa-caret-down"></i>
							</span>
						) : (
							<span className={styles.caret}>
								<i className={"fas fa-caret-right"}></i>
							</span>
						)}
						<span className={styles.option_text}>
							Field Settings
						</span>
					</li>
					<li
						onClick={() => {
							toggleTab("form");
						}}
						className={styles.field_settings}>
						{activeTab === "form" ? (
							<span className={styles.caret}>
								<i class="fas fa-caret-down"></i>
							</span>
						) : (
							<span className={styles.caret}>
								<i className={"fas fa-caret-right"}></i>
							</span>
						)}
						<span className={styles.option_text}>
							Form Settings
						</span>
					</li>
				</ul>
			</div>
			<div className={styles.form_preview}></div>
		</div>
	);
};

export default FormEngine;
