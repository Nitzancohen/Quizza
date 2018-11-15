import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("store")
class Answers extends Component {

    render() {
        const answers = this.props.store.quiz.question[this.props.index].answers
        return (
            <div className="answers">
                {answers.map(answer, i => {
                    <div className="answer">
                        <input type="radio" name="answer" id={i} value={i} />
                        <label for={i}>{i}</label>
                    </div>
                })}
            </div>
        )
    }
}

export default Answers;


{/* <div>
    <input type="radio" name="answer" id="1" value="1" />
    <label for="1">1</label>
</div>
<div>
    <input type="radio" name="answer" id="2" value="2" />
    <label for="2">2</label>
</div>
<div>
    <input type="radio" name="answer" id="3" value="3" />
    <label for="3">3</label>
</div>
<div>
    <input type="radio" name="answer" value="4" />
    <label for="4">4</label>
</div> */}