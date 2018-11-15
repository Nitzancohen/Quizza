import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Questions from './Questions';
import '../../css/quiz.css';

@inject("store")
@observer
class Quiz extends Component {

    componentDidMount() {
        this.props.store.getCurrentQuizz("5bed1ceb37f6772d9c1e0448")
    }

    render() {
        const quiz = this.props.store.quiz
        return (
            <div className="quiz">
                <h3>{quiz.title}</h3>
                <br/>
                <span>{quiz.desc}</span>
                <Questions />
            </div>
        )
    }
}

export default Quiz;