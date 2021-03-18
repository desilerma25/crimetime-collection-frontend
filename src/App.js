import React from 'react'
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
import CaseSubmissionContainer from './containers/CaseSubmissionContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import NavBar from './components/NavBar'

// import CasesContainer from './containers/CasesContainer'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>

        <Switch>
            <Route exact path='/'>< Home /></Route>
            <Route exact path='/cases/new' component={ CaseSubmissionContainer } />
            <Route path='/categories' component={ CategoriesContainer }/>
        </Switch>

      </div>

    );
  }
}

function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      < CategoriesContainer />
    </div>
  )
}