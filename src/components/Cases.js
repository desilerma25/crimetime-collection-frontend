import React from 'react';
import { connect } from 'react-redux';

cosnt handleCaseClick = () => {
    console.log("click!")
}

const Cases = ({ cases }) => {
    return (
        <div>
            Here are your specific cases!
            {cases.map (indivCase => <ul key={indivCase.id}>
                <ol>
                    <button onClick={handleCaseClick}>{indivCase.name}</button>
                </ol>
            </ul>)}
        </div>
    )
}


const mapStateToProps = state => {
    return { cases: state.cases}
}

export default connect(mapStateToProps)(Cases);