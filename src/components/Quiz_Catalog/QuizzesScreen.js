import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import QuizBox from './QuizBox';
// import BoxTest from './BoxTest';

@inject('store')
@observer
class QuizzesScreen extends Component {

    componentDidMount = () => {
        this.props.store.getQuizzes()
    }

    render() {
        const quizzes = this.props.store.quizzes
        console.log(quizzes)
        return (
            <div>
                <div className='quiz-row'>
                    {quizzes ? quizzes.map((q, i) => <QuizBox key={q._id} index={i} quiz={q} />) : null}
                    <br></br><br></br>
                    <button type="button" className='addQuiz btn btn-outline-warning'> add a quiz <i className='fas fa-plus'></i> </button>
                    <br></br><br></br>
                    <br></br><br></br>
                </div>
            </div>
        )
    }
}
export default QuizzesScreen;
