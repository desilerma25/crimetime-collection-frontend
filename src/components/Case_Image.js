import React from 'react';

const CaseImage = ({name, image}) => {
    return(
        <div className='case_img'>
            <img alt={name + 'image'} src={image} />
        </div>
    )
}

export default CaseImage;