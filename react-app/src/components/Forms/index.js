import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForms } from '../../store/forms.js'

function Forms() {
    const dispatch = useDispatch()
    const forms = useSelector(state => state.forms)
    useEffect(() => {
        dispatch(getForms())
    }, [dispatch])

    console.log('forms array', forms)
    console.log('inside forms object', forms?.forms)

    let finalForm = forms?.forms

    return (
        <>
            <h1>Build Form Test</h1>
            {/* <p>{forms}</p> */}
            <button>New Form</button>
            {finalForm?.map(form => {
                return (  
                <div>
                    <ul>
                        <li key={form?.id}>{form?.title}</li>
                    </ul>
                    </div>
                )
            })}
        </>
    )
}

export default Forms
