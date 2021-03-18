import React from 'react';

const CaseImage = ({name, image}) => {
    return(
        <div>
            <img alt={name + 'image'} src={image} />
        </div>
    )
}

export default CaseImage