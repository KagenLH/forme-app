import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { getUserForms, deleteForm, createForm } from "../../store/forms.js";
import FormsTable from "./FormsTable.js";
import "./Forms.css";
import NavBar from "../NavBar/NavBar.js";

// TODO: Redirect unregistered users to a login page
// TODO: Do something about share button on form creator
// TODO: create read me for whole project
//? forme-live.herokuapp.com
function FormsManager() {
	const dispatch = useDispatch();
	const forms = useSelector((state) => state.forms);
	const { user } = useSelector((state) => state.session); // get the logged in user's info

	// console.log('*** FORMS COMPONENT USER DATA ***', user)

	useEffect(() => {
		dispatch(getUserForms(user.id)); // only gets forms owned by the current user
	}, [dispatch, user.id]);

	// console.log('*** FORMS COMPONENT FORM STATE DATA ***', forms)

	const handleDeleteForm = async (formId) => {
		await dispatch(deleteForm(formId));
	};

    // //! testing only
    // const fieldData1 = {
    //     type: 'text',
    //     label: 'Test Field 1',
    //     required: false,
    //     choices: ['choice1', 'choice2', 'choice3']
    // }

    // //! testing only
    // const fieldData2 = {
    //     type: 'text',
    //     label: 'Test Field 2',
    //     required: false,
    //     choices: ['choice1', 'choice2', 'choice3']
    // }

    // //! testing only
    // const fieldData3 = {
    //     type: 'text',
    //     label: 'Test Field 3',
    //     required: false,
    //     choices: ['choice1', 'choice2', 'choice3']
    // }


	// //! testing only
	// const formData = {
	//     owner_id: user.id,
	//     title: "Testing form creation",
	//     description: `This form tests form creation for ${user.email}.`,
	//     titleAlignment: null,
	//     labelPlacement: null,
	//     descriptionAlignment: null,
	//     fields: [fieldData1, fieldData2, fieldData3]
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
	return forms && user ? (
		<>
			<NavBar />
			<div className="form-manager-container">
				<div className="form-manager-page-header">
					<div className="form-manager-header">
						<h1 id="form-manager-title">Forms</h1>
					</div>
					<div className="form-manager-actions">
						<Link to="/forms/build">
							<button className="form-create-button">
								<div className="plus-logo"></div>
								<span className="create-new-form">
									Create New Form
								</span>
							</button>
						</Link>
						{/* <Link to="/forms"><button onClick={() => handleSubmit(formData)} className="form-create-button"> ! TEST FORM CREATE</button></Link> */}
					</div>
				</div>
				<div className="forms-area">
					<div className="utility-bar">{/* search bar */}</div>
					<div className="form-manager-forms">
						<FormsTable
							forms={forms}
							handleDeleteForm={handleDeleteForm}
							user={user}
						/>
					</div>
				</div>
			</div>
		</>
	) : (
		<Redirect to='/login' />
	);
}

export default FormsManager;
