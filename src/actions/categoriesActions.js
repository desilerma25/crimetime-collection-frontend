export const fetchCategories = () => {
    return (dispatch) => {
        // console.log("c")
        fetch('http://127.0.0.1:3000/categories')
        .then(resp => resp.json())
        .then(categories => {
            // console.log("d")
            dispatch({type: 'FETCH_CATEGORIES', payload: categories})
        }
        )
    }
}

