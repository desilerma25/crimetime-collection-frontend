export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/categories')
        .then(resp => resp.json())
        .then(categories => dispatch({type: 'FETCH_CATEGORIES', payload: categories}))
    }
}

