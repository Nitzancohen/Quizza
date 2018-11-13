import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
    // store: stores.store
    // 
}))
@observer
class QuizBox extends Component {

    render() {
        const { quizzes } = this.props;

        return (
            <div className='box-link' onClick={}>
                <p>{quizzes[this.props.index].name}</p>
            </div>
        );
    }
}

export default QuizBox;

