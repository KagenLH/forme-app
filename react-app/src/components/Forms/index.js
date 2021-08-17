import React, { useEffect } from 'react';
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
                    <h1>Forms</h1>
                </div>
                <div className='form-manager-actions'>
                    <button>Create Form</button>
                </div>
            </div>
            <div className='forms-area'>
                <div className='utility-bar'>
                    {/* search bar */}
                </div>
                <div className='form-manager-forms'>
                    <div className='form-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{/* form title */}Form title goes here</td>
                                </tr>
                            </tbody>
                        </table>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms
