import React, { Component } from "react";
// import '../../css/questionForm';

class QuestionForm extends Component {
    constructor() {
        super()
        this.state = {
            formInputs: [
                {
                    newQuestion: "",
                    answer1: "",
                    answer2: "",
                    answer3: "",
                    answer4: ""
                }
            ]
        }
    }

    inputChange = (i ,e) => {
        const {name, value} = e.target
        let formInputs = [...this.state.formInputs]
        formInputs[i] = {...formInputs[i], [name]: value}
        this.setState({ formInputs })
        console.log(this.state.formInputs)
    }

    addQuestion = ()=> {
        this.setState(prevState => ({
            formInputs: [... prevState.formInputs, {
                newQuestion: "",
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: ""
            }]
        }))
    }

    removeQuestion = (i)=> {
        let formInputs = [...this.state.formInputs]
        formInputs.splice(i, 1);
        this.setState({ formInputs });
    }

    createNewQuestion = ()=> {
        return this.state.formInputs.map((el, i)=> (
            <div key={i}>
                <input type="text" placeholder="Question" name="newQuestion" onChange={this.inputChange} />
                <input type="text" placeholder="Answer 1" name="answer1" value={el.answer1 || ""} onChange={this.inputChange} />
                <input type="text" placeholder="Answer 2" name="answer2" value={el.answer2 || ""} onChange={this.inputChange} />
                <input type="text" placeholder="Answer 3" name="answer3"  value={el.answer3 || ""} onChange={this.inputChange} />
                <input type="text" placeholder="Answer 4" name="answer4" value={el.answer4 || ""} onChange={this.inputChange} />
                <input type="button" value="remove" onClick={this.removeQuestion} />
            </div>
        ))
    }

    render() {
        return (
            <div className="question-form">
                {this.createNewQuestion()}
                <input type="button" value="+" onClick={this.addQuestion} />
            </div>
        )
    }
}

export default QuestionForm;