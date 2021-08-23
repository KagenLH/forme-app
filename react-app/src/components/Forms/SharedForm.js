import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getSharedForm } from '../../store/forms.js'
import './Forms.css'
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
        <div>
            <form classNames="shared-form">
                <h2 className="form-title">{form[formId]?.title}</h2>
                <p className='form-description'>{form[formId]?.description}</p>
                {
                    fieldsArray?.map(field => <FormField field={field} />)
                }
                <Link to="/forms"><button className="forms-return">Back To Forms</button></Link>
            </form>
        </div>

    )
}

export default SharedForm
