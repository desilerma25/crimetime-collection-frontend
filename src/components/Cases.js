import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Cases = ({ cases, category }) => {

    return (
        <div>
        Here are your {category.name} cases!
        
        
        {cases.map(indivCase => <ul key={indivCase.id}>
            <ol>
                <Link to={`/categories/${indivCase.category_id}/cases/${indivCase.id}`}>
                    <button>{indivCase.name}</button>
                </Link>
            </ol>
        </ul>)}
        </div>
    )
}


const mapStateToProps = state => {
    return { cases: state.cases}
}

export default connect(mapStateToProps)(Cases);

