import styles from "./FormEngine.module.css";
import { useState } from "react";
import {
	createTextInput,
	createMultiLineText,
	createSelectField,
	createMultipleChoice,
	createCheckboxField,
	createNumericInput,
} from "@kagenlh/jsxfields";

const initialFieldState = {
	label:  "Untitled",
	maxLength:  255, // Used with text inputs to determine a maximum number of characters
	required:  false,
	placeholder:  "",
	instructions:  "", // If not empty creates a blurb of grey text to the right of the field
	choices: ['First Choice', 'Second Choice', 'Third Choice'], // Used to determine the available options with selects, multiple choices, and checkboxes.
};

const FormEngine = () => {
	const [activeTab, setActiveTab] = useState("add");
	const [formTitle, setFormTitle] = useState("Untitled Form");
	const [formDescription, setFormDescription] = useState(
		"This is my form. Please fill it out. It's awesome!"
	);
	const [textValue, setTextValue] = useState("");
	const [formSettings, setFormSettings] = useState({
		titleAlignment: "left",
		descriptionAlignment: "left",
		labelPlacement: "top",
	});

	const [jsxContent, setJsxContent] = useState([]);

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

	const onSave = async () => {
		const fieldSettings = jsxContent.map((pair) => pair[1]);
		const formData = {
			title: formTitle,
			description: formDescription,
			...formSettings,
			fields: [
				...fieldSettings
			]
		};

		console.log(formData);
		// const res = await fetch('/api/forms', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(formData)
		// });

		// if(res.ok) {
		// 	const data = res.json();
		// 	console.log(data);
		// }
	};

	// const insertToPreview = (jsx) => {
	// 	setJsxContent((prevState) => {
	// 		return prevState;
	// 	});
	// };

	return (
		<div className={styles.engine_container}>
			<div
				className={
					activeTab === "add"
						? `${styles.settings_panel_add}`
						: activeTab === "field"
						? `${styles.settings_panel_field}`
						: `${styles.settings_panel_form}`
				}>
				<ul
					className={
						activeTab === "add"
							? `${styles.add_field_tab_container}`
							: activeTab === "field"
							? `${styles.field_settings_tab_container}`
							: `${styles.form_settings_tab_container}`
					}>
					<li
						onClick={() => {
							toggleTab("add");
						}}
						className={`${styles.add_field_tab} ${styles.none_add_field_hide}`}>
						{activeTab === "add" ? (
							<span className={styles.caret_down}>
								<i class="fas fa-caret-down"></i>
							</span>
						) : (
							<span className={styles.caret_right}>
								<i className={"fas fa-caret-right"}></i>
							</span>
						)}
						<span className={styles.option_text}>Add a Field</span>
					</li>
					<li
						onClick={() => {
							toggleTab("field");
						}}
						className={` ${styles.field_settings_tab}`}>
						{activeTab === "field" ? (
							<span className={styles.caret_down}>
								<i class="fas fa-caret-down"></i>
							</span>
						) : (
							<span className={styles.caret_right}>
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
						className={`${styles.form_settings_tab}`}>
						{activeTab === "form" ? (
							<span className={styles.caret_down}>
								<i class="fas fa-caret-down"></i>
							</span>
						) : (
							<span className={styles.caret_right}>
								<i className={"fas fa-caret-right"}></i>
							</span>
						)}
						<span className={styles.option_text}>
							Form Settings
						</span>
					</li>
				</ul>
				{activeTab === "add" ? (
					<div className={styles.add_field_constructor}>
						<div className={styles.button_container}>
							<h3 className={styles.standard_text}>Standard</h3>
							<ul className={styles.left_col_stand}>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										onClick={() => {
											const jsx = createTextInput(
												textValue,
												setTextValue
											);
											setJsxContent((prevState) => {
												return [...prevState, [jsx, initialFieldState]];
											});
										}}
										className={`${styles.standard_button}`}
										href="#">
										<b
											className={
												styles.single_line_text_icon
											}></b>
										<span
											className={
												styles.single_line_text_text
											}>
											Single Line Text
										</span>
									</button>
								</li>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button}`}
										href="#">
										<b
											className={
												styles.paragraph_text_icon
											}></b>
										<span
											className={
												styles.paragraph_text_text
											}>
											Paragraph Text
										</span>
									</button>
								</li>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button}`}
										href="#">
										<b
											className={
												styles.multiple_choice_icon
											}></b>
										<span
											className={
												styles.multiple_choice_text
											}>
											Multiple Choice
										</span>
									</button>
								</li>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button} ${styles.section_break_button}`}
										href="#">
										<b></b>
										<span
											className={
												styles.section_break_text
											}>
											Section Break
										</span>
									</button>
								</li>
							</ul>
							<ul className={styles.right_col_stand}>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button}`}
										href="#">
										<b className={styles.number_icon}></b>
										<span className={styles.number_text}>
											Number
										</span>
									</button>
								</li>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button}`}
										href="#">
										<b className={styles.checkbox_icon}></b>
										<span
											className={styles.checkboxes_text}>
											Checkboxes
										</span>
									</button>
								</li>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button}`}
										href="#">
										<b className={styles.dropdown_icon}></b>
										<span className={styles.dropdown_text}>
											Dropdown
										</span>
									</button>
								</li>
								<li
									className={
										styles.standard_button_container
									}>
									<button
										className={`${styles.standard_button} ${styles.page_break_button}`}
										href="#">
										<b></b>
										<span className={styles.pagebreak_text}>
											Page Break
										</span>
									</button>
								</li>
							</ul>
						</div>
					</div>
				) : null}
				{activeTab === "field" ? (
					<div className={styles.field_settings_constructor}>
						<h1>Yeet2</h1>
					</div>
				) : null}
				{activeTab === "form" ? (
					<div className={styles.form_settings_constructor}>
						<form>
							<label className={styles.form_settings_label}>
								Form Title
							</label>
							<div className={styles.form_title_container}>
								<input
									className={`${styles.form_settings_title}
										${styles.input_boxes}`}
									value={formTitle}
									placeholder="Untitled Form"
									onChange={(e) => {
										setFormTitle(e.target.value);
									}}
									type="text"
									maxlength="50"
								/>
							</div>
							<label className={styles.form_settings_label}>
								Description
							</label>
							<div className={styles.form_description_container}>
								<textarea
									className={`${styles.form_settings_description} ${styles.input_boxes}`}
									value={formDescription}
									placeholder="This is my form. Please fill it out. It's awesome!"
									onChange={(e) => {
										setFormDescription(e.target.value);
									}}
								/>
							</div>
							<label className={styles.form_settings_label}>
								Form Title Alignment
							</label>
							<div
								className={
									styles.form_title_alignment_container
								}>
								<select
									className={`${styles.form_settings_title_alignment} ${styles.dropdown_boxes}`}
									value={formSettings.titleAlignment}
									onChange={(e) => {
										setFormSettings((prevState) => {
											return {
												...prevState,
												titleAlignment: e.target.value,
											};
										});
									}}>
									<option value="left">Left Aligned</option>
									<option value="center">
										Center Aligned
									</option>
									<option value="right">Right Aligned</option>
								</select>
							</div>
							<label className={styles.form_settings_label}>
								Description Alignment
							</label>
							<div
								className={
									styles.form_description_alignment_container
								}>
								<select
									className={`${styles.form_settings_description_alignment} ${styles.dropdown_boxes}`}
									value={formSettings.descriptionAlignment}
									onChange={(e) => {
										setFormSettings((prevState) => {
											return {
												...prevState,
												descriptionAlignment:
													e.target.value,
											};
										});
									}}>
									<option value="left">Left Aligned</option>
									<option value="center">
										Center Aligned
									</option>
									<option value="right">Right Aligned</option>
								</select>
							</div>
							<label className={styles.form_settings_label}>
								Label Placement
							</label>
							<div
								className={
									styles.form_label_placement_container
								}>
								<select
									className={`${styles.form_settings_label_alignment} ${styles.dropdown_boxes}`}
									value={formSettings.labelPlacement}
									onChange={(e) => {
										setFormSettings((prevState) => {
											return {
												...prevState,
												labelPlacement: e.target.value,
											};
										});
									}}>
									<option value="top">Top Aligned</option>
									<option value="left">Left Aligned</option>
									<option value="right">Right Aligned</option>
								</select>
							</div>
						</form>
					</div>
				) : null}
			</div>
			<div className={styles.form_preview}>
				<div className={styles.form_preview_title}>
					<div className={styles.actual_title}>{formTitle}</div>
					<div className={styles.form_description}>
						{formDescription}
					</div>
				</div>
				<div>
					{jsxContent?.map((jsxcontent) => (
						<div
							onClick={() => {
								setJsxContent((prevState) => {
									const newState = [...prevState];
									const deletedIdx = newState.findIndex(
										(ele) => {
											return ele === jsxcontent;
										}
									);
									delete newState[deletedIdx];
									return newState;
								});
							}}>
							{jsxcontent}
						</div>
					))}
				</div>
				<div className={styles.view_share_footer}>
					<span className={styles.view_button_wrapper}>
						<button className={styles.view_button}>
							<b className={styles.view_button_icon}></b>
							<span className={styles.view_button_text}>
								View Form
							</span>
						</button>
					</span>
					<span className={styles.share_button_wrapper}>
						<button className={styles.share_button}>
							<b className={styles.share_button_icon}></b>
							<span className={styles.share_button_text}>
								Share Form
							</span>
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default FormEngine;
