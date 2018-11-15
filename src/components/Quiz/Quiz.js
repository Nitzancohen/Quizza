import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Questions from './Questions';
import '../../css/quiz.css';

@inject("store")
@observer
class Quiz extends Component {

    userAnswers = []

    getFinalResult = () => {
        let greatestOccurring = { val: this.userAnswers[0], occ: 0 };

        for (let i = 0; i < this.userAnswers.length; i++) {
            let count = 1;
            for (let j = i + 1; j < this.userAnswers.length; j++) if (this.userAnswers[j] === this.userAnswers[i]) count++;
            if (count > greatestOccurring.occ) greatestOccurring = { val: this.userAnswers[i], occ: count }
        }

        return greatestOccurring.val;
    }

    componentDidMount() {
        this.props.store.getCurrentQuizz("5bed1ceb37f6772d9c1e0448")
    }

    showQuiz(quiz) {
        return (
            <div className="quiz">
                <h3>{quiz.title}</h3>
                <br />
                <span>{quiz.desc}</span>
                <Questions />
            </div>
        )
    }

    render() {
        const quiz = this.props.store.quiz
        return quiz ? this.showQuiz(quiz) : null
    }
}

export default Quiz;