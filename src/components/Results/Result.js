import React, { Component } from 'react';
import Analytics from '../analytics/Analytics';
import '../../css/resultsForm.css'

class Result extends Component {
    render() {
        const result = this.props.result();
        return (
            <div>
                <h5 className='resultTitle'>{result.title}</h5>
                <p className='resultDesc'>{result.desc}</p>
                <Analytics />
            </div>
        );
    }
}

export default Result;