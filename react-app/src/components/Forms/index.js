import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForms, deleteForm, createForm } from '../../store/forms.js'

function Forms() {
    const dispatch = useDispatch()
    const forms = useSelector(state => state.form)

    useEffect(() => {
        dispatch(getForms())
    }, [dispatch])

    // console.log('forms array', forms)
    // console.log('inside forms object', forms?.forms)

    // TODO: make it so forms delete immediately without a refresh
    const handleDeleteForm = async (formId) => {
        await dispatch(deleteForm(formId))
        await dispatch(getForms())
    }

    //! testing only
    const formData = {
        id: 9,
        owner_id: 1,
        title: "Testing form creation",
        description: "This form tests form creation.",
        title_align: null,
        label_align: null,
        description_align: null
    }

    //! testing form creation
    const handleSubmit = async (formData) => {
        await dispatch(createForm(formData))
        await dispatch(getForms())
    }


    let finalForm = forms?.forms
    return (
        <>
            <h1>Build Form Test</h1>
            {/* <p>{forms}</p> */}
            <button onClick={() => handleSubmit(formData)}>Create Form</button>
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
