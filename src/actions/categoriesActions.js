//  create action to fetch categories from api

export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/categories')
        .then(resp => resp.json())
        .then(categories => dispatch({type: 'FETCH_CATEGORIES', payload: categories}))
            // passing data we received from fetch, wil go to reducer and will return payload from action
            // console.log('fetchCategories', categories))
    }
}