import React, { Component } from "react";
import { observer } from "mobx-react";
import Questions from './Questions';
import '../../css/quiz.css';

@observer
class Quiz extends Component {

    render() {
        return (
            <div className="quiz">
                <h3>Quiz Tilte</h3>
                <br/>
                <span>Quiz description</span>
                <Questions />
            </div>
        )
    }
}

export default Quiz;