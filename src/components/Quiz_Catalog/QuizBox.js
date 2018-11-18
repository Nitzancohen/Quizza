import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import BoxTest from './BoxTest'

@inject('store')
@observer
class QuizBox extends Component {

    // handleClick = () => {
    //     this.props.store.getCurrentQuizz(this.props.quiz._id)
    // };

    render() {
        // <div className='box-link' onClick={this.handleClick}>
        return (
            <div className='box-link'>
                <BoxTest />
            </div>
        );
    }
}

export default QuizBox;

