import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import QuizBox from './QuizBox';
// import BoxTest from './BoxTest';

@inject('store')
@observer
class QuizzesScreen extends Component {

    componentDidMount =() =>{
        this.props.store.getQuizzes()
    }
    
    render() {
        const quizzes = this.props.store.quizzes
        console.log(quizzes)
        return (
            <div>
                <div className='quiz-row'>
                    {quizzes ? quizzes.map((q, i) => <QuizBox key={q._id} index={i} quiz={q} />) : null}
                </div>
                <br></br>
                <Link to="/create-quiz"><button type="button" className='addQuiz btn btn-outline-warning'> add a quiz <i className='fas fa-plus'></i> </button></Link>
            </div>
        )
    }
}
export default QuizzesScreen;
