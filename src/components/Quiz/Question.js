import React, { Component } from 'react';
import Answers from './Answers';

class Question extends Component {

    render() {
        const question = this.props.question
        return (
            <div className="question">
                <span><input type="button" className="prev-button" value="previous" /></span>
                <div>{question.text}</div>
                <span><input type="button" className="next-button" value="next" /></span>
                <Answers />
            </div>
        )
    }
}

export default Question;