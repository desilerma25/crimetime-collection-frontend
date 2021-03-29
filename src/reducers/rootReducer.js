import { combineReducers } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { casesReducer } from './casesReducer'

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    cases: casesReducer
})