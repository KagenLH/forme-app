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

    return (
        <>
            <h1>Build Form Test</h1>
            <p>{forms?.message}</p>
            <button>New Form</button>
        </>
    )
}

export default Forms
