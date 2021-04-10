const baseURL = 'https://intense-woodland-16823.herokuapp.com'

export const fetchCategories = () => {
    return (dispatch) => {
        // console.log("c")
        fetch(`${baseURL}/categories`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(resp => resp.json())
        .then(categories => {
            // console.log("d")
            dispatch({type: 'FETCH_CATEGORIES', payload: categories})
        }
        )
    }
}

