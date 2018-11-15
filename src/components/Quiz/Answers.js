import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Answers extends Component {

    render() {
        const answers = this.props.store.quiz.questions[this.props.index].answers
        return (
            <div className="answers">
                {answers.map((answer, i) => {
                    return (
                        <div className="answer">
                            <input type="radio" name="answer" id={i} value={answer.text} />
                            <label for={i}>{answer.text}</label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Answers;