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

	const [fieldSettings, setFieldSettings] = useState({
		fieldType: "single_line_text",
		fieldSize: "small",
	});
	const [isCheckedOne, setIsCheckedOne] = useState(false);
	const [isCheckedTwo, setIsCheckedTwo] = useState(false);
	const [isCheckedThree, setIsCheckedThree] = useState(false);
	const [firstChoice, setFirstChoice] = useState("First Choice");
	const [secondChoice, setSecondChoice] = useState("Second Choice");
	const [thirdChoice, setThirdChoice] = useState("Third Choice");
	const [isCheckedRequired, setIsCheckedRequired] = useState(false);
	const [maxChar, setMaxChar] = useState(25);
	const [predefinedValue, setPredefinedValue] = useState("");
	const [placeholderText, setPlaceholderText] = useState("");
	const [instructions, setInstructions] = useState("");

	const [jsxContent, setJsxContent] = useState([]);
	const [multiLineValue, setMultiLineValue] = useState("");
	const [multiChoiceValue, setMultiChoiceValue] = useState("");
	const [numberValue, setNumberValue] = useState("");
	const [selectValue, setSelectValue] = useState("");
	const [checkboxValue, setcheckboxValue] = useState("");

	const [fieldLabel, setFieldLabel] = useState("Untitled");

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
												return [...prevState, jsx];
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
										onClick={() => {
											const jsx = createMultiLineText(
												multiLineValue,
												setMultiLineValue
											);
											setJsxContent((prevState) => {
												return [...prevState, jsx];
											});
										}}
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
										onClick={() => {
											const jsx = createMultipleChoice(
												multiChoiceValue,
												setMultiChoiceValue
											);
											setJsxContent((prevState) => {
												return [...prevState, jsx];
											});
										}}
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
										onClick={() => {
											const jsx = createNumericInput(
												numberValue,
												setNumberValue
											);
											setJsxContent((prevState) => {
												return [...prevState, jsx];
											});
										}}
										className={`${styles.standard_button}`}
										href="#">
										<b className={styles.number_icon}></b>
										<span className={styles.number_text}>
											Number
										</span>
									</button>
								</li>
								<li
									onClick={() => {
										const jsx = createCheckboxField(
											checkboxValue,
											setcheckboxValue
										);
										setJsxContent((prevState) => {
											return [...prevState, jsx];
										});
									}}
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
										onClick={() => {
											const jsx = createSelectField(
												selectValue,
												setSelectValue
											);
											setJsxContent((prevState) => {
												return [...prevState, jsx];
											});
										}}
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
					<ul className={styles.field_settings_constructor}>
						<form>
							<label className={styles.field_settings_label}>
								Field Label
							</label>
							<div className={styles.field_label_container}>
								<textarea
									className={`${styles.field_settings_field_label} ${styles.input_boxes}`}
									value={fieldLabel}
									placeholder={fieldLabel}
									onChange={(e) => {
										setFieldLabel(e.target.value);
									}}
								/>
							</div>
							<li className={styles.field_type_li}>
								<label className={styles.field_settings_label}>
									Field Type
								</label>
								<div className={styles.field_type_container}>
									<select
										className={`${styles.field_settings_field_type} ${styles.dropdown_boxes}`}
										value={fieldSettings.fieldType}
										onChange={(e) => {
											setFieldSettings((prevState) => {
												return {
													...prevState,
													fieldType: e.target.value,
												};
											});
										}}>
										<option value="single_line_text">
											Single Line Text
										</option>
										<option value="paragraph_text">
											Paragraph Text
										</option>
										<option value="multiple_choice">
											Multiple Choice
										</option>
										<option value="number">Number</option>
										<option value="checkboxes">
											Checkboxes
										</option>
										<option value="dropdown">
											Dropdown
										</option>
									</select>
								</div>
							</li>
							<li className={styles.field_size_li}>
								<label className={styles.field_settings_label}>
									Field Size
								</label>
								<div className={styles.field_size_container}>
									<select
										className={`${styles.field_settings_field_size} ${styles.dropdown_boxes}`}
										value={fieldSettings.fieldSize}
										onChange={(e) => {
											setFieldSettings((prevState) => {
												return {
													...prevState,
													fieldSize: e.target.value,
												};
											});
										}}>
										<option value="small">Small</option>
										<option value="medium">Medium</option>
										<option value="large">Large</option>
									</select>
								</div>
							</li>
							<fieldset className={styles.choices_container}>
								<legend className={`${styles.choices_legend}`}>
									Choices
								</legend>
								<ul>
									<li className={styles.choices_li}>
										<input
											className={styles.choices_bullet}
											type="checkbox"
											value={isCheckedOne}
											onClick={() => {
												setIsCheckedOne(!isCheckedOne);
											}}
										/>
										<input
											className={`${styles.field_settings_choices} ${styles.input_boxes}`}
											type="text"
											maxLength="150"
											value={firstChoice}
											placeholder={firstChoice}
											onChange={(e) => {
												setFirstChoice(e.target.value);
											}}
										/>
									</li>
									<li className={styles.choices_li}>
										<input
											className={styles.choices_bullet}
											type="checkbox"
											value={isCheckedTwo}
											onClick={() => {
												setIsCheckedTwo(!isCheckedTwo);
											}}
										/>
										<input
											className={`${styles.field_settings_choices} ${styles.input_boxes}`}
											type="text"
											maxLength="150"
											value={secondChoice}
											placeholder={secondChoice}
											onChange={(e) => {
												setSecondChoice(e.target.value);
											}}
										/>
									</li>
									<li className={styles.choices_li}>
										<input
											className={styles.choices_bullet}
											type="checkbox"
											value={isCheckedThree}
											onClick={() => {
												setIsCheckedThree(
													!isCheckedThree
												);
											}}
										/>
										<input
											className={`${styles.field_settings_choices} ${styles.input_boxes}`}
											type="text"
											maxLength="150"
											value={thirdChoice}
											placeholder={thirdChoice}
											onChange={(e) => {
												setThirdChoice(e.target.value);
											}}
										/>
									</li>
								</ul>
							</fieldset>
							<li className={styles.options_li}>
								<fieldset className={styles.options_container}>
									<legend
										className={`${styles.option_legend}`}>
										Option
									</legend>
									<input
										className={styles.required_checkbox}
										type="checkbox"
										value={isCheckedRequired}
										onClick={() => {
											setIsCheckedRequired(
												!isCheckedRequired
											);
										}}
									/>
									<label className={styles.required_text}>
										Required
									</label>
								</fieldset>
							</li>
							<li className={styles.range_li}>
								<fieldset className={styles.range_container}>
									<legend
										className={` ${styles.range_legend}`}>
										Range
									</legend>
									<div>
										<span>
											<label
												className={
													styles.max_char_text
												}>
												Max Characters
											</label>
											<input
												type="text"
												className={` ${styles.input_boxes} ${styles.max_char_input}`}
												placeholder={maxChar}
												value={maxChar}
												onChange={(e) => {
													setMaxChar(e.target.value);
												}}
											/>
										</span>
									</div>
								</fieldset>
							</li>
							<label className={styles.field_settings_label}>
								Predefined Value
							</label>
							<div className={styles.predefined_value_container}>
								<input
									className={`${styles.field_settings_predefined_values}
										${styles.input_boxes}`}
									value={predefinedValue}
									onChange={(e) => {
										setPredefinedValue(e.target.value);
									}}
									type="text"
									maxlength="50"
								/>
							</div>
							<label className={styles.field_settings_label}>
								Placeholder Text
							</label>
							<div className={styles.placeholder_text_container}>
								<input
									className={`${styles.field_settings_placeholder_text}
										${styles.input_boxes}`}
									value={placeholderText}
									onChange={(e) => {
										setPlaceholderText(e.target.value);
									}}
									type="text"
									maxlength="50"
								/>
							</div>
							<label className={styles.field_settings_label}>
								Instructions
							</label>
							<div className={styles.instructions_container}>
								<textarea
									className={`${styles.field_settings_instructions} ${styles.input_boxes}`}
									value={instructions}
									placeholder={setInstructions}
									onChange={(e) => {
										setFieldLabel(e.target.value);
									}}
								/>
							</div>
							<button
								type="button"
								className={`${styles.standard_button} ${styles.delete_buttons}`}>
								<b className={styles.delete_icons}></b>
								<span className={styles.delete_text}>
									Delete
								</span>
							</button>
						</form>
					</ul>
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
