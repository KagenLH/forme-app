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

function FormField({ field, label_placement }) {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="form-field">
			{field.type === "text"
				? createTextInput(inputValue, setInputValue, {
						...field,
						labelPlacement: label_placement,
				  })
				: null}
			{field.type === "textarea"
				? createMultiLineText(inputValue, setInputValue, {
						...field,
						labelPlacement: label_placement,
				  })
				: null}
			{field.type === "select"
				? createSelectField(inputValue, setInputValue, {
						...field,
						labelPlacement: label_placement,
				  })
				: null}
			{field.type === "multipleChoice"
				? createMultipleChoice(inputValue, setInputValue, {
						...field,
						labelPlacement: label_placement,
				  })
				: null}
			{field.type === "checkbox"
				? createCheckboxField(inputValue, setInputValue, {
						...field,
						labelPlacement: label_placement,
				  })
				: null}
			{field.type === "number"
				? createNumericInput(inputValue, setInputValue, {
						...field,
						labelPlacement: label_placement,
				  })
				: null}
		</div>
	);
}

export default FormField;
