import React, { Component } from 'react';
// import { observable } from 'mobx';
import '../../css/createQuizForm.css';
import QuestionForm from './QuestionForm'; 
import ResultsForm from './ResultsForm';

class CreateForm extends Component {
    formInputs = {
        title: "",
        description: ""
    }

    inputChange = (e)=> {
        this.formInputs[e.target.name] = e.target.value
        console.log(this.formInputs[e.target.name])
    }    

    addNewQuestion = ()=> {

    }

    render() {
        return (
            <div className="create-form">
                <div>
                    Title: <input type="text" name="title" onChange={this.inputChange} />
                </div>
                <div>
                    Description:
                    <textarea name="description" onChange={this.inputChange} rows="3" cols="30" />
                </div>
                <ResultsForm />
                <QuestionForm />
            </div>
        )
    }
}

export default CreateForm;