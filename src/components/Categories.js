import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
const Categories = ({ categories }) => {
    return (

        <div className='categories'>
            <h4>Select a category below to view the cases associated with it.</h4>
            <br/>
            <br/> 
            {categories.map(category => <div key={category.id}>
                <p>
                    <Link to={`/categories/${category.id}/cases`}>
                        <button>{category.name}</button>
                    </Link>
                </p>
            </div>)}
        </div>
        
    );
};




const mapStateToProps = state => {
    return { categories: state.categories }
}


export default connect(mapStateToProps)(Categories);




