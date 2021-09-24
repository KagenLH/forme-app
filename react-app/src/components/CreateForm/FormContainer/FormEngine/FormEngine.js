import styles from "./FormEngine.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
	createTextInput,
	createMultiLineText,
	createSelectField,
	createMultipleChoice,
	createCheckboxField,
	createNumericInput,
} from "@kagenlh/jsxfields";

const initialFieldState = {
	label: "Untitled",
	maxLength: 255, // Used with text inputs to determine a maximum number of characters
	required: false,
	placeholder: "",
	instructions: "", // If not empty creates a blurb of grey text to the right of the field
	choices: ["First Choice", "Second Choice", "Third Choice"], // Used to determine the available options with selects, multiple choices, and checkboxes.
};

function toBool(str) {
	if(typeof str === "string")
	switch(str.toLowerCase().trim()) {
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(str);
	} else {
		return str;
	}
}

export default function FormEngine() {
	const history = useHistory()
	const [activeField, setActiveField] = useState(null);
	const [activeTab, setActiveTab] = useState("add");
	const [formTitle, setFormTitle] = useState("Untitled Form");
	const [formDescription, setFormDescription] = useState(
		"This is my form. Please fill it out. It's awesome!"
	);
	const [textValue, setTextValue] = useState("");
	const [formSettings, setFormSettings] = useState({
		titleAlignment: "flex-start",
		descriptionAlignment: "flex-start",
		labelPlacement: "top",
	});

	const [fieldSettings, setFieldSettings] = useState({
		fieldType: "text",
		fieldSize: "small",
	});


	const [fieldChoices, setFieldChoices] = useState([
		"First Choice",
		"Second Choice",
		"Third Choice",
	]);

	const [isCheckedRequired, setIsCheckedRequired] = useState(false);
	const [maxChar, setMaxChar] = useState(25);
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

	const onSave = async () => {
		const fieldSettings = jsxContent.map((pair) => pair[1]);
		const formData = {
			title: formTitle,
			description: formDescription,
			...formSettings,
			fields: [...fieldSettings],
		};

		const res = await fetch("/api/forms/build", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			const data = res.json();
		}

		history.push('/forms')
	};

	const updateAllFields = (e, tag) => {
		const currentJSX = activeField;
		setJsxContent((prevState) => {
			return prevState.map((jsx) => {
				const oldSettings = jsx[1];
				const newSettings = { ...oldSettings, [tag]: e.target.value };
				if (newSettings.type === "text") {
					const newJsx = createTextInput(
						textValue,
						setTextValue,
						newSettings
					);
					const newState = [newJsx, newSettings];
					return newState;
				} else if (newSettings.type === "textarea") {
					const newJsx = createMultiLineText(
						textValue,
						setTextValue,
						newSettings
					);
					const newState = [newJsx, newSettings];
					return newState;
				} else if (newSettings.type === "select") {
					const newJsx = createSelectField(
						textValue,
						setTextValue,
						newSettings
					);
					const newState = [newJsx, newSettings];
					return newState;
				} else if (newSettings.type === "multipleChoice") {
					const newJsx = createMultipleChoice(
						textValue,
						setTextValue,
						newSettings
					);
					const newState = [newJsx, newSettings];
					return newState;
				} else if (newSettings.type === "checkbox") {
					const newJsx = createCheckboxField(
						textValue,
						setTextValue,
						newSettings
					);
					const newState = [newJsx, newSettings];
					return newState;
				} else {
					const newJsx = createNumericInput(
						textValue,
						setTextValue,
						newSettings
					);
					const newState = [newJsx, newSettings];
					return newState;
				}
			});
		});
		setActiveField(currentJSX);
	}

	const updateFieldSettings = (e, tag) => {
		const replacementIndex = jsxContent.findIndex((jsx) => jsx[0] === activeField[0]);
		setJsxContent((prevState) => {
			const newState = [...prevState];
			const oldSettings = jsxContent[replacementIndex][1];
			const newSettings = { ...oldSettings, [tag]: e.target.value };
			if (newSettings.type === "text") {
				const newJsx = createTextInput(
					textValue,
					setTextValue,
					newSettings
				);
				newState[replacementIndex] = [newJsx, newSettings];
				setActiveField(newState[replacementIndex]);
				return newState;
			} else if (newSettings.type === "textarea") {
				const newJsx = createMultiLineText(
					textValue,
					setTextValue,
					newSettings
				);
				newState[replacementIndex] = [newJsx, newSettings];
				setActiveField(newState[replacementIndex]);
				return newState;
			} else if (newSettings.type === "select") {
				const newJsx = createSelectField(
					textValue,
					setTextValue,
					newSettings
				);
				newState[replacementIndex] = [newJsx, newSettings];
				setActiveField(newState[replacementIndex]);
				return newState;
			} else if (newSettings.type === "multipleChoice") {
				const newJsx = createMultipleChoice(
					textValue,
					setTextValue,
					newSettings
				);
				newState[replacementIndex] = [newJsx, newSettings];
				setActiveField(newState[replacementIndex]);
				return newState;
			} else if (newSettings.type === "checkbox") {
				const newJsx = createCheckboxField(
					textValue,
					setTextValue,
					newSettings
				);
				newState[replacementIndex] = [newJsx, newSettings];
				setActiveField(newState[replacementIndex]);
				return newState;
			} else if (newSettings.type === "number") {
				const newJsx = createNumericInput(
					textValue,
					setTextValue,
					newSettings
				);
				newState[replacementIndex] = [newJsx, newSettings];
				setActiveField(newState[replacementIndex]);
				return newState;
			}
		});
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
												return [
													...prevState,
													[
														jsx,
														{
															type: "text",
															...initialFieldState,
														},
													],
												];
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
												return [
													...prevState,
													[
														jsx,
														{
															type: "textarea",
															...initialFieldState,
														},
													],
												];
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
												return [
													...prevState,
													[
														jsx,
														{
															type: "multipleChoice",
															...initialFieldState,
														},
													],
												];
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
												return [
													...prevState,
													[
														jsx,
														{
															type: "number",
															...initialFieldState,
														},
													],
												];
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
											return [
												...prevState,
												[
													jsx,
													{
														type: "checkbox",
														...initialFieldState,
													},
												],
											];
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
												return [
													...prevState,
													[
														jsx,
														{
															type: "select",
															...initialFieldState,
														},
													],
												];
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
						{activeField !== null ? (
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
											updateFieldSettings(e, "label");
										}}
									/>
								</div>
								<li className={styles.field_type_li}>
									<label
										className={styles.field_settings_label}>
										Field Type
									</label>
									<div
										className={styles.field_type_container}>
										<select
											className={`${styles.field_settings_field_type} ${styles.dropdown_boxes}`}
											value={fieldSettings.fieldType}
											onChange={(e) => {
												setFieldSettings(
													(prevState) => {
														return {
															...prevState,
															fieldType:
																e.target.value,
														};
													}
												);
												updateFieldSettings(e, "type");
											}}>
											<option value="text">
												Single Line Text
											</option>
											<option value="textarea">
												Paragraph Text
											</option>
											<option value="multipleChoice">
												Multiple Choice
											</option>
											<option value="number">
												Number
											</option>
											<option value="checkbox">
												Checkboxes
											</option>
											<option value="select">
												Dropdown
											</option>
										</select>
									</div>
								</li>
								{['select', 'checkbox', 'multipleChoice'].includes(activeField[1].type) && <fieldset className={styles.choices_container}>
									<legend
										className={`${styles.choices_legend}`}>
										Choices
									</legend>
									<ul>
										{fieldChoices.map((choice, i) => (
												<input
													className={`${styles.field_settings_choices} ${styles.input_boxes}`}
													type="text"
													value={choice}
													onChange={(e) => {
														let newFieldChoices;
														setFieldChoices(
															(prevState) => {
																const newState =
																	[
																		...prevState,
																	];
																const changedIndex =
																	newState.findIndex(
																		(
																			field
																		) =>
																			field ===
																			choice
																	);
																newState[
																	changedIndex
																] =
																	e.target.value;
																newFieldChoices = newState;
																return newState;
															}
														);

														const replacementIndex = jsxContent.findIndex((jsx) => jsx[0] === activeField[0]);
														setJsxContent((prevState) => {
															const newState = [...prevState];
															const oldSettings = jsxContent[replacementIndex][1];
															const newSettings = { ...oldSettings, choices: newFieldChoices };
															if (newSettings.type === "select") {
																const newJsx = createSelectField(
																	textValue,
																	setTextValue,
																	newSettings
																);
																newState[replacementIndex] = [newJsx, newSettings];
																setActiveField(newState[replacementIndex]);
																return newState;
															} else if (newSettings.type === "multipleChoice") {
																const newJsx = createMultipleChoice(
																	textValue,
																	setTextValue,
																	newSettings
																);
																newState[replacementIndex] = [newJsx, newSettings];
																setActiveField(newState[replacementIndex]);
																return newState;
															} else if (newSettings.type === "checkbox") {
																const newJsx = createCheckboxField(
																	textValue,
																	setTextValue,
																	newSettings
																);
																newState[replacementIndex] = [newJsx, newSettings];
																setActiveField(newState[replacementIndex]);
																return newState;
															}
														})
													}}
												/>
										))}
									</ul>
								</fieldset>}
								<div>
								<li className={styles.options_li}>
									<fieldset
										className={styles.options_container}>
										<legend
											className={`${styles.option_legend}`}>
											Option
										</legend>
										<input
											className={styles.required_checkbox}
											type="checkbox"
											checked={isCheckedRequired}
											onChange={(e) => {
												setIsCheckedRequired(
													!isCheckedRequired
												);
												e.target.value = !isCheckedRequired;
												updateFieldSettings(
													e,
													"required"
												);
											}}
										/>
										<label className={styles.required_text}>
											Required
										</label>
									</fieldset>
								</li>
								{['text', 'textarea'].includes(activeField[1].type) && <li className={styles.range_li}>
									<fieldset
										className={styles.range_container}>
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
														setMaxChar(
															e.target.value
														);
														updateFieldSettings(
															e,
															"maxLength"
														);
													}}
												/>
											</span>
										</div>
									</fieldset>
								</li>}
								</div>
								{['text', 'textarea', 'number'].includes(activeField[1].type) &&
								<div>
									<label className={styles.field_settings_label}>
										Placeholder Text
									</label>
									<div
										className={
											styles.placeholder_text_container
										}>
										<input
											className={`${styles.field_settings_placeholder_text}
											${styles.input_boxes}`}
											value={placeholderText}
											onChange={(e) => {
												setPlaceholderText(e.target.value);
												updateFieldSettings(
													e,
													"placeholder"
												);
											}}
											type="text"
											maxlength="50"
										/>
									</div>
								</div>}
								<label className={styles.field_settings_label}>
									Instructions
								</label>
								<div className={styles.instructions_container}>
									<textarea
										className={`${styles.field_settings_instructions} ${styles.input_boxes}`}
										value={instructions}
										placeholder={setInstructions}
										onChange={(e) => {
											setInstructions(e.target.value);
											updateFieldSettings(
												e,
												"instructions"
											);
										}}
									/>
								</div>
								<button
									type="button"
									className={`${styles.standard_button} ${styles.delete_buttons}`}
									onClick={() => {
										const active = [...activeField];
										setActiveField(null);
										setJsxContent((prevState) => {
											const newState = [...prevState];
											const deletionIndex = newState.findIndex(jsx => jsx[0] === active[0]);
											newState.splice(deletionIndex, 1);
											return newState;
										});
									}}>
									<b className={styles.delete_icons}></b>
									<span className={styles.delete_text}>
										Delete
									</span>
								</button>
							</form>
						) : (
							<div className={styles.none_selected_notice}>
								<h3>
									<b
										className={
											styles.no_field_selected_text
										}>
										No Field Selected
									</b>
								</h3>
								<p className={styles.please_click_text}>
									Please click on a field in the form preview
									on the right to change its properties.
								</p>
							</div>
						)}
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
									<option value="flex-start">Left Aligned</option>
									<option value="center">
										Center Aligned
									</option>
									<option value="flex-end">Right Aligned</option>
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
									<option value="flex-start">Left Aligned</option>
									<option value="center">
										Center Aligned
									</option>
									<option value="flex-end">Right Aligned</option>
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

										updateAllFields(e, "labelPlacement");
									}}>
									<option value="top">Top Aligned</option>
									<option value="left">Left Aligned</option>
								</select>
							</div>
						</form>
					</div>
				) : null}
			</div>
			<div className={styles.form_preview}>
				<div className={styles.form_preview_title}>
					<div style={{'display': 'flex', 'justifyContent': formSettings.titleAlignment}}>
						<div className={styles.actual_title}>{formTitle}</div>
					</div>
					<div style={{'display': 'flex', 'justifyContent': formSettings.descriptionAlignment}}>
						<div className={styles.form_description}>
							{formDescription}
						</div>
					</div>
				</div>
				<div>
					{jsxContent?.map((jsxcontent) => (
						<div
							className={styles.form_preview_field}
							key={Math.random()}
							onClick={() => {
								setActiveField(jsxcontent);
								setFieldSettings((prevState) => {
									return {
										...prevState,
										fieldType: jsxcontent[1].type,
									};
								});
								setFieldLabel(jsxcontent[1].label);
								setInstructions(jsxcontent[1].instructions);
								setFieldChoices(jsxcontent[1].choices);
								setMaxChar(jsxcontent[1].maxLength);
								setIsCheckedRequired(toBool(jsxcontent[1].required));
								setPlaceholderText(jsxcontent[1].placeholder);
							}}>
							{jsxcontent && jsxcontent[0]}
						</div>
					))}
				</div>
				<div className={styles.view_share_footer}>
					{/* <span className={styles.view_button_wrapper}>
						<button className={styles.view_button}>
							<b className={styles.view_button_icon}></b>
							<span className={styles.view_button_text}>
								View Form
							</span>
						</button>
					</span> */}
					<span className={styles.save_button_wrapper}>
						<button
							className={styles.save_button}
							onClick={() => onSave()}>
							<span className={styles.save_button_icon}>
								<i className="fas fa-check"></i>
							</span>
							<span className={styles.save_button_text}>
								Save Form
							</span>
						</button>
					</span>
					{/* <span className={styles.share_button_wrapper}>
						<button className={styles.share_button}>
							<b className={styles.share_button_icon}></b>
							<span className={styles.share_button_text}>
								Share Form
							</span>
						</button>
					</span> */}
				</div>
			</div>
		</div>
	);
};
