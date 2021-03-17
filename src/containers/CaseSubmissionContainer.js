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
            <div>
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
                    <ol><input type="radio" value="Assassinations" checked={this.state.category_id === "Assassinations"} onChange={this.handleChange} name="category" /> Assassinations</ol>
                    <ol><input type="radio" value="Cold Cases" checked={this.state.category_id === "Cold Cases"} onChange={this.handleChange} name="category" /> Cold Cases</ol>
                    <ol><input type="radio" value="Drugs" checked={this.state.category_id === "Drugs"} onChange={this.handleChange} name="category" /> Drugs</ol>
                    <ol><input type="radio" value="Homicide" checked={this.state.category_id === "Homicide"} onChange={this.handleChange} name="category" /> Homicide</ol>
                    <ol><input type="radio" value="Organized Crime" checked={this.state.category_id === "Organized Crime"} onChange={this.handleChange} name="category" /> Organized Crime</ol>
                    <ol><input type="radio" value="Robberies" checked={this.state.category_id === "Robberies"} onChange={this.handleChange} name="category" /> Robberies</ol>
                    <ol><input type="radio" value="Serial Killers" checked={this.state.category_id === "Serial Killers"} onChange={this.handleChange} name="category" /> Serial Killers</ol>
                    <ol><input type="radio" value="White Collar" checked={this.state.category_id === "White Collar"} onChange={this.handleChange} name="category" /> White Collar</ol>
                    <ol><input type="radio" value="Wrongfully Accused" checked={this.state.category_id === "Wrongfully Accused"} onChange={this.handleChange} name="category" /> Wrongfully Accused</ol>
                    <ol><input type="radio" value="Unsolved" checked={this.state.category_id === "Unsolved"} onChange={this.handleChange} name="category" /> Unsolved</ol>
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