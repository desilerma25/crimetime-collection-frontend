import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CatDropdown from '../components/CatDropdown'
import { connect } from 'react-redux'


class NavBar extends React.Component {
render() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">CrimeTime Collection</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/cases/new">Case Submission</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="/categories"> All Categories</NavDropdown.Item>
            <NavDropdown.Divider />
            <CatDropdown categories={this.props.categories}/>
        </NavDropdown>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>)
}

}

const mapStateToProps = state => {
  return {categories: state.categories}
}

export default connect(mapStateToProps)(NavBar);

