// will be container = data & methods regarding categories
import React from "react";
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux' 

class CategoriesContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.fetchCategories)
        this.props.fetchCategories();
    }
    render() {
        return (
            <div>
                You are in the categories container!
            </div>
        )
    }
}

// makes fetchCat available to our container bc of mapDispatchToProps(gives access to actions)
export default connect(null, { fetchCategories })(CategoriesContainer);