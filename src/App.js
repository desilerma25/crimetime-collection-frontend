import React from 'react'
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
import CaseSubmissionContainer from './containers/CaseSubmissionContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from './components/NavBar'
import Home from './components/Home'


export default class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div className='app'>
        <NavBar/>

        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/cases/new' component={ CaseSubmissionContainer } />
            <Route path='/categories' component={ CategoriesContainer }/>
        </Switch>

      </div>

    );
  }
}