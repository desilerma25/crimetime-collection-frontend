// will be container, data and methods regarding cases
import React from 'react';
import Cases from '../components/Cases';
import { connect } from 'react-redux';
import { fetchCases } from '../actions/casesActions'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

class CasesContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.fetchCases)
        this.props.fetchCases();
    }

    render() 
    {
        debugger
        return(
            <div>
                This is the cases container!
                <Cases category_id={this.props.category_id}/>
            </div>
        )
    }
}

export default connect(null, { fetchCases })(CasesContainer);

