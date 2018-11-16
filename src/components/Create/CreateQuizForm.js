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
        // check that everything is ok
        // this.props.store.saveQuiz(this.formInputs, this.quizQuestions, this.quizResults)
    }

    render() {
        return (
            <div className="create-form">
                <h2>Create your own Quiz!</h2>
                <div>
                    Title: <input type="text" name="title" onChange={this.inputChange} placeholder="title"/>
                </div>
                <div>
                    Description:
                    <textarea name="description" onChange={this.inputChange} rows="4" cols="40" placeholder="describe your quiz..."/>
                </div>
                <ResultsForm saveResults={this.saveResults} />
                <QuestionForm saveQuestions={this.saveQuestions} />
            </div>
        )
    }
}

export default CreateForm;