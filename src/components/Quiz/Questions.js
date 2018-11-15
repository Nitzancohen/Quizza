import React, { Component } from "react";
import Question from './Question';

class Questions extends Component {

    render() {
        let questions= this.props.store.quiz.questions
        return (
            <div className="Questions">
                {questions.map(  i => {
                    <Question index={i}  key={i} />
                })}
            </div>
        )
    }
}

export default Questions;