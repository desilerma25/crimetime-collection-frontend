// will be container, data and methods regarding cases
import React from 'react';
import Cases from '../components/Cases';
import { connect } from 'react-redux';
import { fetchCases } from '../actions/casesActions'

class CasesContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.fetchCases)
        this.props.fetchCases(this.props.category.id);
    }

    render() 
    {
        // debugger
        return(
            <div>
                This is the cases container!
                <Cases category_id={this.props.category.id}/>
            </div>
        )
    }
}

export default connect(null, { fetchCases })(CasesContainer);

