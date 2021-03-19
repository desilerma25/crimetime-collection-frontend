import React from 'react'
import { Link } from 'react-router-dom'

// import CasesContainer from './containers/CasesContainer'


export default class NavBar extends React.Component {
  render() {
    return (
        <div className='navbar'>
          <ul>
            <ol>
              <Link to='/'> Home </Link> || 
              <Link to='/cases/new'> Case Submission </Link>
            </ol>
          </ul>
        </div>
    );
  }
}


