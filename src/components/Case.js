import React from 'react';
import CaseImage from './Case_Image'


const SpecificCase = ({specCase}) => {
    // debugger
    return (
        <div className='spec_case'>
            Here is your specific case information!
            <h1>{specCase.name}</h1>
            <CaseImage name={specCase.name} image={specCase.image_url}/>
            <h4>{specCase.description}</h4>
        </div>
    )
}




export default SpecificCase;