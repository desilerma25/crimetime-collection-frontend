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
            <div>
                You are in the categories container!
                <Switch>
                    <Route exact path='/categories/:id/cases' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const category = this.props.categories.find(c => c.id === id)
                        console.log(routeInfo)
                        return !!category ? <CasesContainer routeInfo={routeInfo} category={category}/> :
                        <div>Loading...</div>
                    } } />
                    <Route exact path='/categories' component={ Categories } />
                </Switch>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {categories: state.categories}
}

// makes fetchCat available to our container bc of mapDispatchToProps(gives access to actions)
export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer);