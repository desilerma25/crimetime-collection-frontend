export const casesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CASES':
            return action.payload
        default:
            return state
    }
}