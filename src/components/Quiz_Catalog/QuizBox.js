import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class QuizBox extends Component {

    handleClick = () => {
        this.props.store.getCurrentQuizz(this.props.quiz._id)
    };

    render() {
        // const { quizzes } = this.props;
        return (
            <div className='box-link' onClick={this.handleClick}>
                <h2>{this.props.quiz.title}</h2>
                <span>{this.props.quiz.desc}</span>
            </div>
        );
    }
}

export default QuizBox;

