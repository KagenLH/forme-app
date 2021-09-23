import React, { useState } from "react";
import {
	createTextInput,
	createMultiLineText,
	createSelectField,
	createMultipleChoice,
	createCheckboxField,
	createNumericInput,
} from "@kagenlh/jsxfields";
import "./Forms.css";

function FormField({ field }) {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="form-field">
			{field.type === "text"
				? createTextInput(inputValue, setInputValue, field)
				: null}
			{field.type === "textarea"
				? createMultiLineText(inputValue, setInputValue, field)
				: null}
			{field.type === "select"
				? createSelectField(inputValue, setInputValue, field)
				: null}
			{field.type === "multipleChoice"
				? createMultipleChoice(inputValue, setInputValue, field)
				: null}
			{field.type === "checkbox"
				? createCheckboxField(inputValue, setInputValue, field)
				: null}
			{field.type === "number"
				? createNumericInput(inputValue, setInputValue, field)
				: null}
		</div>
	);
}

export default FormField;
