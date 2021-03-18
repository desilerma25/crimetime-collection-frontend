import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// const handleCatClick = () => {
//     console.log("we've been clicked!")
// }
// need to use a link with button, instead of handle click
 
const Categories = ({ categories }) => {
    return (
        <div>
            Show me some categories!!
            
            {categories.map(category => <ul key={category.id}>
                <ol>
                    <Link to={`/categories/${category.id}/cases`}>
                        <button>{category.name}</button>
                    </Link>
                </ol>
            </ul>)}
        </div>
    );
};



const mapStateToProps = state => {
    // returns obj with property
    return { categories: state.categories }
}

// want to grab state from store to make a list
export default connect(mapStateToProps)(Categories);

{/* <Route exact path='/categories/:id/cases' component={(routeInfo) => {
    const id = parseInt(routeInfo.match.params.id)
    const indivCase = this.props.cases.find(i => i.id === id)
    console.log(routeInfo)
    return !!indivCase ? <CasesContainer routeInfo={routeInfo} indivCase={indivCase}/> :
    <div>Loading...</div>
  } } /> */}
