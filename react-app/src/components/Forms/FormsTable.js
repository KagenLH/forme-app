import React from "react";
import ShareFormLinkModal from "./ShareFormLinkModal.js";

function FormsTableBody({ forms, handleDeleteForm, user }) {
	// console.log("PROPS DATA", forms, user);
	return (
		<div className="form-table">
			<table>
				<thead className="table-head">
					<tr className="column-title-container">
						<th className="column-title-name">Name</th>
						<th className="form-action-label">
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
									{form.title}
                                <td className='form-description'>
                                    {form.description}
                                </td>
								</td>
								<td className="form-actions">
									<td className="share-buttons" key={form.id}>
										{/* <i className="fa fa-share-alt-square" title='Share' aria-hidden="true" /> */}
										<ShareFormLinkModal formId={form.id} />
									</td>
									{
										// only render delete button if user owns form
										user.id === form.owner_id ? (
											<td
												className="delete-buttons"
												onClick={(e) =>
													handleDeleteForm(form.id)
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
