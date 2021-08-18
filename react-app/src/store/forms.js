// TODO: create type constants
const LOAD = 'forms/LOAD'
const ADD = 'forms/ADD'
const REMOVE = 'forms/REMOVE'

// action creators
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

// get all forms
export const getForms = () => async (dispatch) => {
    const res = await fetch(`/api/forms/`)
    // console.log('*****RES*****', res)

    if (res.ok) {
        const data = await res.json()
        const { forms } = data
        console.log('*** GET THUNK ***', forms)
        dispatch(load(forms))
        // return forms
    }
}

// create a single form
export const createForm = (formData) => async (dispatch) => {
    const res = await fetch(`api/forms/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

    if (res.ok) {
        const form = res.json()
        dispatch(add(form))
    }
}

// deletes a form
export const deleteForm = (id) => async (dispatch) => {
    const res = await fetch(`api/forms/${id}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const form = await res.json()
        console.log(' *** THUNK FORM ITEM ***', form)
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
                console.log(' *** LOAD REDUCER ***', allForms)
            // for (let form in action.form) {
            //     allForms[form] = action.form.forms
            // }
            return {
                ...allForms,
                ...state
            }
        case ADD:
            // adds new forms to state
            if (!state[action.form.id]) {
                const newState = {
                    ...state,
                    [action.form.id]: action.form
                }
                console.log('*** REDUCER ADD ***', action.form.id)
                return newState
            }
            // TODO: do stuff for edited forms?
            break

        case REMOVE:
            // removes forms from the state
            const newState = { ...state } // Object.assign({}, state)

            console.log('*** DELETED FORM STATE ITEM ***', newState.forms[action.form.id])
            delete newState[action.form.id]
            return newState

        default:
            return state
    }
}

export default formsReducer
