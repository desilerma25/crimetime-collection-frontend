export const addCase = newCase => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/cases', {
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
        fetch(`http://127.0.0.1:3000/categories/${category_id}/cases`)
        .then(resp => resp.json())
        .then(cases => dispatch({type: 'FETCH_CASES', payload: cases}))
    }
}