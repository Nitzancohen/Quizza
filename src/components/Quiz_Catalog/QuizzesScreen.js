import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import QuizBox from './QuizBox';
import { observable, action } from "mobx";
import Quiz from '../Quiz/Quiz'
import '../../css/QuizScreen.css';

@inject('store')
@observer
class QuizzesScreen extends Component {

    @observable selectedQuiz = null;

    componentDidMount = () => {
        this.props.store.getQuizzes()
    }

    @action selectQuiz = (quizId) => {
        this.selectedQuiz = quizId;
    }

    render() {
        const quizzes = this.props.store.quizzes
        if (!this.selectedQuiz)
            return (
                <div>
                    <h4 className="title-quizzes"> Our Quizzes </h4>
                    <div className='quiz-row'>
                        {quizzes ? quizzes.map((q, i) => <QuizBox selectQuiz={this.selectQuiz} key={q._id} index={i} quiz={q} />) : null}
                    </div>
                    <br></br>
                    <Link to="/create-quiz"><button type="button" className='addQuiz btn btn-secondary '> <i className='fas fa-plus'></i> add a quiz  </button></Link>
                </div>
            )
        else return <Quiz id={this.selectedQuiz} />
    }
}
export default QuizzesScreen;
