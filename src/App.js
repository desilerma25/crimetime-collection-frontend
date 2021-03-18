import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
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
        <Router>
          <Switch>
              <Route exact path='/' component={ CategoriesContainer }>< Home /></Route>
              <Route exact path='/cases/new' component={ CaseSubmissionContainer } />
              <Route path='/categories' component={ CategoriesContainer }/>
            </Switch>
        </Router>
      <NavBar/>
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