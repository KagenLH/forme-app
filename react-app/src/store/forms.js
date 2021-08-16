// TODO: create type constants
const LOAD = 'forms/load'
const ADD = 'forms/add'

// action creators
const load = (form) => (
    {
        type: LOAD,
        form
    }
)

const add = (form) => ({
    type: ADD,
    form
})

// THUNK ACTIONS

// get all forms
export const getForms = () => async dispatch => {
    const res = await fetch(`/api/forms/`)
    console.log('*****RES*****', res)

    if (res.ok) {
        const forms = await res.json()
        console.log('jsoned returned', forms)
        dispatch(load(forms))
    }
}

const initialState = {}
const formsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allForms = {}
            // action.form.forEach(form => allForms[form.id] = form)
            for (let form in action.form) {
                allForms[form] = action.form.forms
            }
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
                return newState
            }
            // TODO: do stuff for edited forms
            break
        default:
            return state
    }
}

export default formsReducer
