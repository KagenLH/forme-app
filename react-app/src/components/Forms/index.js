import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForms, deleteForm, createForm } from '../../store/forms.js'
import './Forms.css'

function Forms() {
    const dispatch = useDispatch()
    const forms = useSelector(state => state.forms)

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
    // const formData = {
    //     id: 9,
    //     owner_id: 1,
    //     title: "Testing form creation",
    //     description: "This form tests form creation.",
    //     title_align: null,
    //     label_align: null,
    //     description_align: null
    // }

    // new form submission -- this function works properly
    //! move to another component?
    // const handleSubmit = async (formData) => {
    //     await dispatch(createForm(formData))
    //     await dispatch(getForms())
    // }


    let finalForm = forms?.forms
    return (
        <div className='form-manager-container'>
            <div className='form-manager-page-header'>
                <div className='form-manager-header'>
                    <h1 id='form-manager-title'>Forms</h1>
                </div>
                <div className='form-manager-actions'>
                    <button className="form-create-button"> + Create New Form</button>
                </div>
            </div>
            <div className='forms-area'>
                <div className='utility-bar'>
                    {/* search bar */}
                </div>
                <div className='form-manager-forms'>
                    <div className='form-table'>
                        <table className='TBD'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <>
                            <tbody>
                                {finalForm?.map(form => {
                                    return (
                                        <>
                                            <tr className='form-table-rows'>
                                                <td className='form-table-data' key={form?.id}>{form?.title}</td>
                                                <td className='delete-buttons' onClick={() => handleDeleteForm(form?.id)}> - Delete Form</td>
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
