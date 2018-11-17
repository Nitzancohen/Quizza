import React, { Component } from 'react';
// import { observable } from 'mobx';
import '../../css/createQuizForm.css';
import QuestionForm from './QuestionForm';
import ResultsForm from './ResultsForm';
import { inject } from 'mobx-react';

@inject('store')
class CreateForm extends Component {
    formInputs = {
        title: "",
        description: ""
    }

    quizQuestions = null;
    quizResults = null;

    inputChange = (e) => this.formInputs[e.target.name] = e.target.value;

    saveQuestions = (questions) => this.quizQuestions = questions;

    saveResults = (results) => this.quizResults = results;

    saveQuiz = () => {
        if ((this.formInputs.title)
        && (this.formInputs.description)
        && (this.quizQuestions)
        && (this.quizResults)) {
            const header = this.formInputs
            const questions = this.quizQuestions
            const results = this.quizResults
            this.props.store.saveQuiz(header, questions, results)
        } else alert('Please make sure to provide all fields!')
    }

    render() {
        return (
            <div className="create-form">
                <h2>Create your own Quiz!</h2>
                <div>
                    Title: <input type="text" name="title" onChange={this.inputChange} placeholder="title" />
                </div>
                <div>
                    Description:
                    <textarea name="description" onChange={this.inputChange} rows="4" cols="40" placeholder="describe your quiz..." />
                </div>
                <ResultsForm saveResults={this.saveResults} />
                <QuestionForm saveQuestions={this.saveQuestions} />
                <input type="button" value="CREATE QUIZ!!" onClick={this.saveQuiz} />
            </div>
        )
    }
}

export default CreateForm;