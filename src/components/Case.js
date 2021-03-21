import React from 'react';
import CaseImage from './Case_Image'


const SpecificCase = ({specCase}) => {
    // debugger
    return (

        <div className='spec_case'>
            <h1>{specCase.name}</h1> <br />
            <CaseImage name={specCase.name} image={specCase.image_url}/> <br />
            <h5>{specCase.description}</h5>
        </div>
        
    )
}




export default SpecificCase;