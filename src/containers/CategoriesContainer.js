// will be container = data & methods regarding categories
import React from "react";
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux' 
import Categories from '../components/Categories';
import CasesContainer from '../containers/CasesContainer';
import { Route, Switch } from 'react-router-dom';

class CategoriesContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.fetchCategories)
        this.props.fetchCategories();
    }
    render() {
        return (

            <div className='cat_cont'>
                <Switch>
                    <Route path='/categories/:id/cases' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const category = this.props.categories.find(c => c.id === id)
                        console.log(routeInfo)
                        return !!category ? <CasesContainer routeInfo={routeInfo} category={category}/> :
                        <div>Loading...</div>
                    } } />
                    <Route exact path='/' component={ Categories } />
                    <Route exact path='/categories' component={ Categories } />
                </Switch>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {categories: state.categories}
}


export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);