import React, { Component } from "react";
import Question from './Question';

class Questions extends Component {
    questions = [
        {
            text:"",
            answers: []
        },
        //...10
    ]

    render() {
        return (
            <div className="Questions">
                {this.questions.map( question, i => {
                    <Question question={question}  key={i} />
                })}
            </div>
        )
    }
}

export default Questions;