import React, { Component } from 'react';
import Analytics from '../analytics/Analytics';

class Result extends Component {
    render() {
        const result = this.props.result();
        return (
            <div>
                <h5>{result.title}</h5>
                <p>{result.desc}</p>
                <Analytics />
            </div>
        );
    }
}

export default Result;