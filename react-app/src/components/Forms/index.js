import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForms, deleteForm } from '../../store/forms.js'

function Forms() {
    const dispatch = useDispatch()
    const forms = useSelector(state => state.forms)
    useEffect(() => {
        dispatch(getForms())
    }, [dispatch])

    // console.log('forms array', forms)
    // console.log('inside forms object', forms?.forms)

    const handleDeleteForm = async (formId) => {
        await dispatch(deleteForm(formId))
    }

    let finalForm = forms?.forms
    return (
        <>
            <h1>Build Form Test</h1>
            {/* <p>{forms}</p> */}
            <button>Create Form</button>
            {finalForm?.map(form => {
                return (
                <div>
                    <ul>
                        <li key={form?.id}>{form?.title}</li>
                        <button onClick={() => handleDeleteForm(form?.id)}>Delete</button>
                    </ul>
                    </div>
                )
            })}
        </>
    )
}

export default Forms