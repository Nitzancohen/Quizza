import React, { Component } from 'react';
import Answers from './Answers';
import { inject, observer } from 'mobx-react';

@inject(store)
@observer
class Question extends Component {

    render() {
        let question = this.props.store.quiz.questions[this.props.index]
        return (
            <div className="question">
                <h1>{question.text}</h1>
                <Answers index={this.props.index} />
                <form>
                    <span><input type="button" className="next-button" value="next" onClick={this.props.nextquestion} /></span>
                </form>
            </div>
        )
    }
}

export default Question;