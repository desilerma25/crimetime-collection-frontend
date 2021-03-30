import React from 'react';
import { connect } from 'react-redux'
import { addCase } from '../actions/casesActions'
import { fetchCategories } from '../actions/categoriesActions'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class CaseSubmissionContainer extends React.Component {
    state = {
        name: '',
        description: '',
        image_url: '',
        category_id: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addCase(this.state)
        this.setState({
            name: '',
            description: '',
            image_url: '',
            category_id: ''
        })
    }

    componentDidMount() {
        console.log(this.props.fetchCategories)
        this.props.fetchCategories();
    }

    render() {
        console.log(this.state)
        return (
            <div className='caseForm'>
                <h1>Case Submission Form:</h1><br/>
                
                <form onSubmit={this.handleSubmit}>
                    <label className='form-inline' >Name:</label>
                    <input className='form-inline form-control' type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                    <br/>

                    <label className='form-inline'>Image Link:</label>
                    <input className='form-inline form-control' type="text" value={this.state.image_url} onChange={this.handleChange} name="image_url" />
                    <br/>
                    
                    <label className='form-inline'>Description:</label>
                    <input className='form-inline form-control' id='height-text' type="text" value={this.state.description} onChange={this.handleChange} name="description" />
                    <br/>

                    <label className='form-inline'>Category:</label>
                    <ul>
                    <p><input type="radio" value="1" checked={this.state.category_id === "1"} onChange={this.handleChange} name="category_id" /> Assassinations</p>
                    <p><input type="radio" value="2" checked={this.state.category_id === "2"} onChange={this.handleChange} name="category_id" /> Cold Cases</p>
                    <p><input type="radio" value="3" checked={this.state.category_id === "3"} onChange={this.handleChange} name="category_id" /> Drugs</p>
                    <p><input type="radio" value="4" checked={this.state.category_id === "4"} onChange={this.handleChange} name="category_id" /> Homicide</p>
                    <p><input type="radio" value="5" checked={this.state.category_id === "5"} onChange={this.handleChange} name="category_id" /> Mass Murder</p>
                    <p><input type="radio" value="6" checked={this.state.category_id === "6"} onChange={this.handleChange} name="category_id" /> Organized Crime</p>
                    <p><input type="radio" value="7" checked={this.state.category_id === "7"} onChange={this.handleChange} name="category_id" /> Robberies</p>
                    <p><input type="radio" value="8" checked={this.state.category_id === "8"} onChange={this.handleChange} name="category_id" /> Serial Killers</p>
                    <p><input type="radio" value="9" checked={this.state.category_id === "9"} onChange={this.handleChange} name="category_id" /> White Collar</p>
                    <p><input type="radio" value="10" checked={this.state.category_id === "10"} onChange={this.handleChange} name="category_id" /> Wrongfully Accused</p>
                    <br/>

                    <Popup trigger={<input type="submit" value="Submit Case" />} position="right center">
                        <div>Your case was submitted!</div>
                    </Popup>
                    </ul>

                </form>
            </div>
        )
    }
}

export default connect(null, { addCase, fetchCategories })(CaseSubmissionContainer);
