import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Answers extends Component {

    render() {
        const answers = this.props.store.quiz.question[this.props.index].answers
        return (
            <div className="answers">
                {answers.map(i => {
                    return (
                        <div className="answer">
                            <input type="radio" name="answer" id={i} value={i} />
                            <label for={i}>{i}</label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Answers;