import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { observable, action } from "mobx";

@inject("store")
@observer
class Answers extends Component {
@observable answer=0
@action changeAnswer=(e)=>{
    this.answer=e.target.id+1
    this.props.checkAnswer(this.answer)
}
    render() {
        const answers = this.props.store.quiz.questions[this.props.index].answers;
        return (
            <div className="answers">
                {answers.map((answer, i) => {
                    return (
                        <div className="answer">
                            <input type="radio" name="answer" id={i} key={i} value={answer.text} onChange={this.changeAnswer}/>
                            <label for={i}>{answer.text}</label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Answers;