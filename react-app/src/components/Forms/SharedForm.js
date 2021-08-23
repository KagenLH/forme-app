import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getSharedForm } from '../../store/forms.js'

import redLogo from '../../assets/images/forme-logo.png';
import './Forms.css';
import FormField from './FormField.js';

function SharedForm() {
    const dispatch = useDispatch()
    const form = useSelector(state => state.forms)
    const { formId } = useParams()

    let fieldsArray = form[formId]?.fields

    useEffect(() => {
        dispatch(getSharedForm(formId))
    }, [dispatch, formId])

    return (
        <div className="shared-form-container">
            <div className="shared-form-logo-container">
                <img className="shared-form-logo" src={redLogo} alt="\A"/>
            </div>
            <form className="shared-form">
                <h2 className="form-title" style={{display: "flex", justifyContent: form[formId]?.title_align}}>{form[formId]?.title}</h2>
                <p className='form-description' style={{display: "flex", justifyContent: form[formId]?.description_align}}>{form[formId]?.description}</p>
                {
                    fieldsArray?.map(field => <FormField field={field} />)
                }
            </form>
            <Link to="/forms"><button className="forms-return">Submit</button></Link>
        </div>

    )
}

export default SharedForm
