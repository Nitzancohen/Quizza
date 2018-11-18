import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PopUp from './popUp'
import '../../css/tryups/boxesCss.css'
import '../../css/tryups/boxesCss2.css'
import ModalExample from './ModalExample';

@inject('store')
@observer
class BoxTest extends Component {

    quizzes = () => {
        let allQuizzes = this.props.store.quizzes
        if (allQuizzes) {
            return (
                allQuizzes.map(q => {
                    console.log(q)
                    return (
                        <button type="button" id="buttonModal1" onClick={this.props.store.popUpAction} data-toggle="modal" data-target="#myModal1">
                            <div className="service-item second-service">
                                <div className="icon"></div>
                                <div>
                                    <h4> {q.title} </h4>
                                    <p> {q.desc} </p>
                                </div>
                            </div>
                        </button>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div id="about" className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h4> Our Quizzes </h4>
                                <div className="line-dec"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            {this.quizzes()}
                            <PopUp /> 
                            <ModalExample />                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxTest;
