import React from 'react';
import { connect } from 'react-redux'
import { addCase } from '../actions/casesActions'

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
        //will call action that will dispatch new obj to reducer to update store state
        // action will make post fetch to persist to db
        e.preventDefault();
        this.props.addCase(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div className='case_form'>
                Case Submission Form:
                
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                    <br/>
                    
                    <label>Description:</label>
                    <input type="text" value={this.state.description} onChange={this.handleChange} name="description" />
                    <br/>

                    <label>Image Link:</label>
                    <input type="text" value={this.state.image_url} onChange={this.handleChange} name="image_url" />
                    <br/>

                    <label>Category:</label>
                    <ul>
                    <ol><input type="radio" value="1" checked={this.state.category_id === "1"} onChange={this.handleChange} name="category_id" /> Assassinations</ol>
                    <ol><input type="radio" value="2" checked={this.state.category_id === "2"} onChange={this.handleChange} name="category_id" /> Cold Cases</ol>
                    <ol><input type="radio" value="3" checked={this.state.category_id === "3"} onChange={this.handleChange} name="category_id" /> Drugs</ol>
                    <ol><input type="radio" value="4" checked={this.state.category_id === "4"} onChange={this.handleChange} name="category_id" /> Homicide</ol>
                    <ol><input type="radio" value="5" checked={this.state.category_id === "5"} onChange={this.handleChange} name="category_id" /> Organized Crime</ol>
                    <ol><input type="radio" value="6" checked={this.state.category_id === "6"} onChange={this.handleChange} name="category_id" /> Robberies</ol>
                    <ol><input type="radio" value="7" checked={this.state.category_id === "7"} onChange={this.handleChange} name="category_id" /> Serial Killers</ol>
                    <ol><input type="radio" value="8" checked={this.state.category_id === "8"} onChange={this.handleChange} name="category_id" /> White Collar</ol>
                    <ol><input type="radio" value="9" checked={this.state.category_id === "9"} onChange={this.handleChange} name="category_id" /> Wrongfully Accused</ol>
                    <ol><input type="radio" value="10" checked={this.state.category_id === "10"} onChange={this.handleChange} name="category_id" /> Unsolved</ol>
                    <br/>

                    <input type="submit" value="Submit Case" />
                    </ul>

                </form>
            </div>
        )
    }
}



export default connect(null, { addCase })(CaseSubmissionContainer);

// const radios = document.getElementsByName('difficulty');
//    for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {

//         difficulty = radios[i].value
//     }
// }