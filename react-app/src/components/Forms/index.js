import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForms } from '../../store/forms.js'

function Forms() {
    const dispatch = useDispatch()
    const forms = Array.from(useSelector(state => state.forms))
    useEffect(() => {
        dispatch(getForms())
    }, [dispatch])

    return (
        <>
            <h1>Build Form Test</h1>
            <p>{forms}</p>
            <button>New Form</button>
        </>
    )
}

export default Forms
