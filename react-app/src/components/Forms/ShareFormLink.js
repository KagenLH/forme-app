import React, { useState } from 'react'

function ShareFormLink({ formUrl }) {
    const [showCopyBtn, setShowCopyBtn] = useState(true)

    const copyText = () => {
        document.querySelector('.form-link-box').select()
        document.execCommand('copy')
        // document.getElementById('copy-btn').innerHTML = '✅'
        setShowCopyBtn(false)
    }

    return (
        <div className='form-link-container'>
            <label className='form-link-label'>Copy this link: </label>
            <input className='form-link-box' type='text' value={formUrl} />
            {showCopyBtn ? (
                <i id='copy-btn' title='Copy' onClick={() => copyText()} className="fa fa-clipboard copy-btn" aria-hidden="true" />
            ) : (
                <span className='copy-btn copy-confirm'>Copied! ✅</span>
            )
            }
        </div>
    )
}

export default ShareFormLink
