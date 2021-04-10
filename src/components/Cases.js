import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react'
// DONT FORGET TO COMPLETE YOUR LIVE CODE CHALLENGE OR REMOVE IT

const Cases = ({ cases, category }) => {
    const [searchTerm, setSearchTerm] = useState("")

    // const [value, increaseValue] = useState("")

    // const upvoteVal = (val) => {
    //     console.log("here")
    //     increaseVote(val)
    // };

    // const increaseVote = val => {
    //     // setState = {count: val}
    // }

    // console.log(useState(""))

    return (
        <div className='cat_cases'>
        <h3>Below are cases classified as {category.name}. Select a case to read more about it.</h3>

        <br/>
        <input type="text" className="searchbar"
         placeholder= "Search By Case Name"
         // eslint-disable-next-line
         onChange={event => {setSearchTerm(event.target.value)} }/>

        

        { // eslint-disable-next-line

        cases.filter((val)=> {
            if (searchTerm === ""){
            return val
        }   else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
        }).map(indivCase => <div key={indivCase.id}>
            <br/>
            <p>
                <Link to={`/categories/${indivCase.category_id}/cases/${indivCase.id}`}>
                    <button>{indivCase.name}</button>
                </Link>
                
            </p>
        </div>)}
    
    </div>
        
        

        
    )
}



const mapStateToProps = stateFromStore => {
    return { cases: stateFromStore.cases}
}

export default connect(mapStateToProps)(Cases);

// {/* <input type="number" className="upvote" onChange={event => increaseValue(event.target.value)} value={value}/> */}
// <button onClick={increaseVote}> Upvote </button>