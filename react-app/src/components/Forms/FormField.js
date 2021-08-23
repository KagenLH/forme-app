import React, { useState } from 'react'
import {
    createTextInput,
    createMultiLineText,
    createSelectField,
    createMultipleChoice,
    createCheckboxField,
    createNumericInput,
} from "@kagenlh/jsxfields";
import './Forms.css'

function FormField({ field }) {
    const [inputValue, setInputValue] = useState('')

    console.log(field)
    return (
        <div>
            {field.type === 'text' ? createTextInput(inputValue, setInputValue, field) : null}
            {field.type === 'textarea' ? createMultiLineText(inputValue, setInputValue, field) : null}
            {field.type === 'select' ? createSelectField(inputValue, setInputValue, field.choices) : null}
            {field.type === 'radio' ? createMultipleChoice(inputValue, setInputValue, field.choices) : null}
            {field.type === 'checkbox' ? createCheckboxField(inputValue, setInputValue, field.choices) : null}
            {field.type === 'number' ? createNumericInput(inputValue, setInputValue, field) : null}
        </div>
    )
}

export default FormField