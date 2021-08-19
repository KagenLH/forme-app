import React from 'react'

function ShareFormLink({ formUrl }) {
    return (
        <>
            <label>Copy this link:</label>
            <input type='text' value={formUrl}></input>
        </>
    )
}

export default ShareFormLink
