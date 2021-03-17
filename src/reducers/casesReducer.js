// to avoid extra nesting define initial state as empty array
export const casesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CASES':
            return action.payload
        case 'ADD_CASE':
            return [...state, action.payload]
        default:
            return state
    }
}