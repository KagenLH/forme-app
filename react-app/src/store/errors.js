// Type constants
const SET_ERRORS = "errors/SET_ERRORS";

// export the Action Creators, so we can dispatch in other thunks
export const setErrors = (errors) => ({
	type: SET_ERRORS,
	errors,
});

// Don't need Thunk Creator because never specifically fetching
// for errors. We will receive them from all the other routes

// Reducer
// initial state is an array because want to display all errors no matter
// what in the current slice of state. Don't need to key in
const initialState = [];

const errorReducer = (_state, action) => {
	switch (action.type) {
		case SET_ERRORS:
			return action.errors; // completely replace, don't spread previous state in
		default:
			return initialState; // never want to save the errors state, so empty it out
	}
};

export default errorReducer;
