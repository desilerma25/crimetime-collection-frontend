import React from 'react';
import { connect } from 'react-redux';

const handleCatClick = () => {
    console.log("we've been clicked!")
}
// need to use a link with button, instead of handle click
 
const Categories = ({ categories }) => {
    return (
        <div>
            Show me some categories!!
            
            {categories.map(category => <ul key={category.id}>
                <ol>
                    <button onClick={handleCatClick}>{category.name}</button>
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