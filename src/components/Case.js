import React from 'react';


const SpecificCase = ({specCase}) => {
    // debugger
    return (
        <div>
            Here is your specific case information!
            <h1>{specCase.name}</h1>
            <img alt={specCase.name + 'image'} src={specCase.image_url} />
            <h4>{specCase.description}</h4>
        </div>
    )
}




export default SpecificCase;