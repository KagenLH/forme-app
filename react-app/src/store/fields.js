// TYPE CONSTANTS
const LOAD = 'fields/LOAD'
const ADD = 'fields/ADD'
const REMOVE = 'fields/REMOVE'


// ACTION CREATORS
// for loading fields
const load = (fields) => ({
    type: LOAD,
    fields
})

// for creating and for editing fields
const add = (fields) => ({
    type: ADD,
    fields
})

// for removing fields
const remove = (fields) => ({
    type: REMOVE,
    fields
})


// THUNK ACTIONS
// get all fields that belong to a single form
export const getFormFields = (formId) => async (dispatch) => {
    const res = await fetch(`/api/fields/forms/${formId}`)

    if (res.ok) {
        const data = res.json()
        const { fields } = data
        dispatch(add(fields))
    }
}


// create all fields for a single form
export const createFields = (fieldsData) => async (dispatch) => {
    const res = await fetch(`/api/fields`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fieldsData)
    })

    if (res.ok) {
        const data = res.json()
        const { fields } = data
        dispatch(add(fields))
    }
}

const initialState = {}

function fieldsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            const allFields = {}
            action.fields.forEach(field => allFields[field.id] = field)

            return {
                ...state,
                ...allFields
            }

        default:
            return state
    }
}

export default fieldsReducer
