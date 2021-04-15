// will be container = data & methods regarding categories
import React from "react";
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux' 
import Categories from '../components/Categories';
import CasesContainer from '../containers/CasesContainer';
import { Route, Switch } from 'react-router-dom';

class CategoriesContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.fetchCategories)
        // console.log("a")
        this.props.fetchCategories();
        // console.log("b")
    }
    render() {
        return (
            <div className='cat_cont'>
                <h3>Please allow a moment for the categories to display as Heroku enjoys taking naps if the site is not active. If it takes a tad too long please open this site on another tab or refresh the page.</h3>
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