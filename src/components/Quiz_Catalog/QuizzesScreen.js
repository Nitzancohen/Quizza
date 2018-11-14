import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import QuizBox from './QuizBox';

@inject('store')
@observer
class QuizzesScreen extends Component {

    render() {
        // const { quizzes } = this.props.store;
        const quizzes  = [
            { _id: 123, title: 'abc', desc: 'abc' },
            { _id: 145, title: 'cba', desc: 'abc' },
            { _id: 156, title: 'bca', desc: 'abc' }
        ]
        return (
            <div>
                <div className='quiz-row'>
                    {quizzes.map((q, i) => <QuizBox key={q._id} index={i} quiz={q} />)}
                </div>
                <button className='addQuiz'> add a quiz <i className='fas fa-plus'></i> </button>
            </div>
        )
    }
}
export default QuizzesScreen;
