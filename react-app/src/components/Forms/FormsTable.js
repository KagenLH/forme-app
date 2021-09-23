import React from "react";
import { Link } from "react-router-dom";
import ShareFormLinkModal from "./ShareFormLinkModal.js";

// TODO: Make form names into links that lead to form render page

function FormsTableBody({ forms, handleDeleteForm, user }) {
	return (
		<div className="form-table">
			<table>
				<thead className="table-head">
					<tr className="column-title-container">
						<th className="column-title-name">Name</th>
						<th className="form-action-label">
							<th className="edit-label">Edit</th>
							<th className="share-label">Share</th>
							<th className="delete-label">Delete</th>
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.values(forms).map((form) => {
						return (
							<tr className="form-table-rows">
								<td className="form-table-data" key={form.id}>
									<Link to={`/forms/${form?.id}/shared`} className='form-title-link'>
										{form?.title}
									</Link>
									<td className='form-description'>
										{form?.description}
									</td>
								</td>
								<td className="form-actions">
									{
										user.id === form?.owner_id ? (
											<td
												className="edit-button"
											>
												<Link to={`forms/${form?.id}/edit`}>
													Edit
												</Link>
											</td>
										): null
									}
									<td className="share-buttons" key={form?.id}>
										{/* <i className="fa fa-share-alt-square" title='Share' aria-hidden="true" /> */}
										<ShareFormLinkModal formId={form?.id} />
									</td>
									{
										// only render delete button if user owns form
										user.id === form?.owner_id ? (
											<td
												className="delete-buttons"
												onClick={(e) =>
													handleDeleteForm(form?.id)
												}>
												<i
													className="fa fa-trash"
													title="Delete"
													aria-hidden="true"
												/>
											</td>
										) : null
									}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default FormsTableBody;
