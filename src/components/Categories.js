import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
const Categories = ({ categories }) => {
    return (
        <div className='cases'>
            Show me some categories!!


            {categories.map(category => <ul key={category.id}>
                <p>
                    <Link to={`/categories/${category.id}/cases`}>
                        <button>{category.name}</button>
                    </Link>
                </p>
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




