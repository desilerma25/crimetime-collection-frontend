const baseURL = 'https://intense-woodland-16823.herokuapp.com'

export const addCase = newCase => {
    return dispatch => {
        fetch(`${baseURL}/cases`, {
            method: 'POST',
            body: JSON.stringify(newCase),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(newCase => dispatch({ type: 'ADD_CASE', payload: newCase }))
    }

}

export const fetchCases = category_id => {
    return (dispatch) => {
        fetch(`${baseURL}/categories/${category_id}/cases`)
        .then(resp => resp.json())
        .then(cases => dispatch({type: 'FETCH_CASES', payload: cases}))
    }
}