import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    createTextInput,
    createMultiLineText,
    createSelectField,
    createMultipleChoice,
    createCheckboxField,
    createNumericInput,
} from "@kagenlh/jsxfields";
import { getSharedForm } from '../../store/forms.js'
import './Forms.css'
import FormField from './FormField.js';

// Do we actually need this component? -DR

function SharedForm() {
    const dispatch = useDispatch()
    const form = useSelector(state => state.forms)
    const { formId } = useParams()
    // const [fieldsArray, _setFieldsArray ] = useState(form[formId]?.fields)
    const [inputValue, setInputValue] = useState('')
    const [multiLineTextValue, setMultiLineTextValue] = useState('')
    const [selectFieldValue, setSelectFieldValue] = useState('')
    const [multipleChoiceValue, setMultipleChoiceValue] = useState('')
    const [checkboxFieldValue, setCheckboxFieldValue] = useState('')
    const [numericInputValue, setNumericInputValue] = useState('')

    let fieldsArray = form[formId]?.fields  

    console.log('THIS IS THE FIELD ARRAY I HOPE!!!!!', fieldsArray)

    // console.log('THIS IS THE FORM STATEf', form[formId]?.title)

    useEffect(() => {
        dispatch(getSharedForm(formId))
    }, [dispatch, formId])

    return (
        <div>
            <h1>Shared Form Page</h1>
            <form>
                <h2>{form[formId]?.title}</h2>
                <p>{form[formId]?.description}</p>
                {
                    fieldsArray?.map(field => <FormField field={field} />)
                }
            </form>
        </div>
 
    )
}

export default SharedForm
