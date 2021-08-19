import React, { useEffect, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserForms, deleteForm, createForm } from '../../store/forms.js'
import {Link} from 'react-router-dom'
import './Forms.css'

// TODO: Make SHARE button functional
// TODO: Add form description under form title in form manager list (?)
function Forms() {
    //! SUCCESSFULLY ONLY LOADS FORMS OWNED BY CURRENT USER
    //! BUT LOADS NEWLY CREATED FORMS WITH ANY owner_id
    //! UNTIL PAGE IS REFRESHED
    const dispatch = useDispatch()
    // const forms = Object.values(useSelector(state => state.forms))
    const forms = useSelector(state => state.forms)
    const { user } = useSelector(state => state.session) // get the logged in user's info

    // console.log('*** FORMS COMPONENT USER DATA ***', user)

    useEffect(() => {
        dispatch(getUserForms(user.id)) // only gets forms owned by the current user
    }, [dispatch, user.id])

    // console.log('*** FORMS COMPONENT FORM STATE DATA ***', forms)

    const handleDeleteForm = async (formId) => {
        await dispatch(deleteForm(formId))
    }

    //! testing only
    // const formData = {
    //     owner_id: user.id,
    //     title: "Testing form creation",
    //     description: `This form tests form creation for ${user.email}.`,
    //     title_align: null,
    //     label_align: null,
    //     description_align: null
    // }

    //! testing only
    // const formData2 = {
    //     owner_id: 2, // should only show up if you are logged in as marnie@aa.io
    //     title: "Testing form ownership",
    //     description: "This form tests form ownership for Marnie.",
    //     title_align: null,
    //     label_align: null,
    //     description_align: null
    // }

    //! testing only
    // const formData3 = {
    //     owner_id: 3, // should only show up if you are logged in as bobbie@aa.io
    //     title: "Testing form ownership",
    //     description: "This form tests form ownership for Bobbie.",
    //     title_align: null,
    //     label_align: null,
    //     description_align: null
    // }

    // used for testing/handling new form creation
    // add the following click handler to button.form-create-button in the JSX below:
    // onClick={() => handleSubmit(formData)}
    //! move to another component?
    // const handleSubmit = async (formData) => {
    //     await dispatch(createForm(formData))
    // }

    return (
        <div className='form-manager-container'>
            <div className='form-manager-page-header'>
                <div className='form-manager-header'>
                    <h1 id='form-manager-title'>Forms</h1>
                </div>
                <div className='form-manager-actions'>
                    <Link to="/forms/build"><button className="form-create-button"> + Create New Form</button></Link>
                </div>
            </div>
            <div className='forms-area'>
                <div className='utility-bar'>
                    {/* search bar */}
                </div>
                <div className='form-manager-forms'>
                    <div className='form-table'>
                        <table>
                            <thead className="table-head">
                                <tr>
                                    <th className="column-title-name">Name</th>
                                </tr>
                            </thead>
                            <>
                                <tbody>
                                    {Object.values(forms)?.map(form => {
                                        return (
                                            <>
                                                <tr className='form-table-rows'>
                                                    <td className='form-table-data' key={form?.id}>{form?.title}</td>
                                                    <td className='form-actions'>
                                                        <td className='share-buttons' key={form?.id}>
                                                            <i className="fa fa-share-alt-square" title='Share' aria-hidden="true" />
                                                        </td>
                                                        <td className='delete-buttons' onClick={(e) => handleDeleteForm(form?.id)}>
                                                            <i className="fa fa-trash" title='Delete' aria-hidden="true" />
                                                        </td>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms
