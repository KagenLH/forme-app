// TYPE CONSTANTS
const LOAD = 'forms/LOAD'
const ADD = 'forms/ADD'
const REMOVE = 'forms/REMOVE'

// ACTION CREATORS
// for loading any number of forms
const load = (form) => ({
    type: LOAD,
    form
})

// for creating and for editing forms
const add = (form) => ({
    type: ADD,
    form
})

// for removing forms
const remove = (form) => ({
    type: REMOVE,
    form
})

// THUNK ACTIONS
// TODO: implement error handling if res.ok fails (render an error page?)


// get ALL forms
export const getForms = () => async (dispatch) => {
    const res = await fetch(`/api/forms/`)
    // console.log('*****RES*****', res)

    if (res.ok) {
        const data = await res.json()
        // reduce nesting of data, pull out the array
        const { forms } = data
        // console.log('*** GET THUNK ***', forms)
        dispatch(load(forms))
        // return forms
    }
}


// get all forms that belong to a specific user
export const getUserForms = (userId) => async (dispatch) => {
    const res = await fetch(`api/forms/users/${userId}`)
    // console.log('*** GET USER FORMS THUNK - RES ***', res)

    if (res.ok) {
        const data = await res.json()
        // console.log('*** GET USER FORMS THUNK - DATA ***', data)
        const { forms } = data
        // console.log('*** GET USER FORMS THUNK - FORMS ***', forms)
        dispatch(load(forms))
    }
}


// get a form without being logged in (shared forms)
export const getSharedForm = (id) => async (dispatch) => {
    const res = await fetch(`/api/forms/${id}/shared`)

    if (res.ok) {
        const form = await res.json()
        dispatch(load(form))
    }
}


// create a single form
export const createForm = (formData) => async (dispatch) => {
    const res = await fetch(`/api/forms/build`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

    if (res.ok) {
        const form = await res.json()
        dispatch(add(form))
    }
}

// deletes a form
export const deleteForm = (id) => async (dispatch) => {
    const res = await fetch(`/api/forms/${id}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const form = await res.json()
        dispatch(remove(form))
        // return form
    }
}

const initialState = {}
const formsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allForms = {}
            action.form.forEach(form => allForms[form.id] = form)
            // console.log(' *** LOAD REDUCER ***', allForms)

            return {
                ...allForms,
                ...state
            }
        case ADD:
            // adds new forms to state
            // console.log('*** ACTION.FORM ***', action.form)
            if (!state[action.form.id]) {
                const newState = {
                    ...state,
                    [action.form.id]: action.form
                }
                // console.log('*** REDUCER ADD ***', newState[action.form.id])
                return newState
            }
            // TODO: do stuff for edited forms?
            break

        case REMOVE:
            // removes forms from the state
            const newState = { ...state } // Object.assign({}, state) <-- same thing

            // console.log('*** DELETED FORM STATE ITEM ***', newState[action.form.id])
            delete newState[action.form.id]
            return { ...newState }

        default:
            return state
    }
}

export default formsReducer
