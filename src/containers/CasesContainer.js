// will be container, data and methods regarding cases
import React from 'react';
import Cases from '../components/Cases';
import { connect } from 'react-redux';
import { fetchCases } from '../actions/casesActions'
import { Switch, Route } from 'react-router-dom';
import SpecificCase from '../components/Case';

class CasesContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.fetchCases)
        this.props.fetchCases(this.props.category.id);
    }

    render() {
        console.log(this.props.cases)
        return(

            <div className='case_cont'>
                <Switch>
                    <Route exact path='/categories/:id/cases' component={(routeInfo) => {
                        return <Cases routeInfo={routeInfo} category={this.props.category} cases={this.props.cases}/>
                    } } />

                    <Route exact path='/categories/:category_id/cases/:id' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const specCase = this.props.cases.find(c => c.id === id)
                        console.log(routeInfo)
                        return !!specCase ? <SpecificCase routeInfo={routeInfo} specCase={specCase}/> :
                        <div>Loading...</div>
                    } } />
                </Switch>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {cases: state.cases}
}

export default connect(mapStateToProps, { fetchCases })(CasesContainer);

