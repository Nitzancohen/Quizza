import React, { Component } from "react";
import Question from './Question';
import { observer, inject } from "mobx-react";
import {observable} from 'mobx'

@inject("store")
@observer
class Questions extends Component {
@observable index=0

@action nextquestion(){
    let length= this.props.store.quiz.questions.length
if(this.index<length-1){
    this.index++
}
else{
    //לקרוא לפנוקציה של סיום הקוויז
}
}
    render() {
        
        return (
            <div className="Questions">
            <Question index={this.index} key={this.index} nextquestion={this.nextquestion}/>

                {/* {questions.map(  i => {
                    <Question index={i}  key={i} />
                })} */}
            </div>
        )
    }
}

export default Questions;