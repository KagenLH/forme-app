import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'

function PageNotFound() {
    const history = useHistory()
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Redirecting you back to the homepage...</p>
            {
                setTimeout(() => {
                    history.push('/')
                }, 1700)
            }
        </div>
    )
}

export default PageNotFound
