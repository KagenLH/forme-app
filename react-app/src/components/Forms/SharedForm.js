import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSharedForm } from '../../store/forms.js'
import './Forms.css'

function SharedForm() {
    const dispatch = useDispatch()
    const form = useSelector(state => state.forms)

    useEffect(() => {
        dispatch(getSharedForm())
    })

    return (
        <h1>Shared Form Page</h1>
    )
}

export default SharedForm
