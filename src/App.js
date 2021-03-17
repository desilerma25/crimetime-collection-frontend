import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CaseSubmissionContainer from './containers/CaseSubmissionContainer';
import CategoriesContainer from './containers/CategoriesContainer';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <ol>
              <Link to='/'> Home </Link> || 
              <Link to='/cases/new'> Case Submission </Link>
            </ol>
          </ul>
        </div>
          <Switch>
            <Route exact path='/'>< Home /></Route>
            <Route exact path='/cases/new' component={ CaseSubmissionContainer } />
          </Switch>
      </Router>
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
