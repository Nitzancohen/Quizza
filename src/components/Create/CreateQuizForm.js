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
                <h2 className="creat-title">Create your own Quiz!</h2>
                <div>
                    <h3>Title:</h3>
                    <br />
                    <input type="text" name="title" onChange={this.inputChange} placeholder="title" />
                    <br />
                </div>
                <div>
                    <h3> Description:</h3>
                    <br />
                    <textarea name="description" onChange={this.inputChange} rows="4" cols="40" placeholder="describe your quiz..." />
                    <br/>
                </div>
                <ResultsForm saveResults={this.saveResults} />
                <QuestionForm saveQuestions={this.saveQuestions} />
                <input className="save-button" type="button" value="CREATE QUIZ!!" onClick={this.saveQuiz} />
            </div>
        )
    }
}

export default CreateForm;