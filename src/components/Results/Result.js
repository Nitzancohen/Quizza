import React, { Component } from 'react';

class Result extends Component {
    render() {
        const result = this.props.result();
        return (
            <div>
                <h5>{result.title}</h5>
                <p>{result.desc}</p>
            </div>
        );
    }
}

export default Result;