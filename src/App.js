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
import NavBar from './components/NavBar'

// import CasesContainer from './containers/CasesContainer'


export default class App extends React.Component {
  render() {
    return (
      <NavBar/>
    );
  }
}
