import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class BoxTest extends Component {

    startQuiz = () => this.props.selectQuiz(this.props.quiz._id)

    render() {
        return (
            <div id="about" className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <button type="button" id="buttonModal1" data-toggle="modal" data-target="#myModal1" onClick={this.startQuiz}>
                                <div className="service-item second-service">
                                    <div className="icon"></div>
                                    <div>
                                        <h4> {this.props.quiz.title} </h4>
                                        <p> {this.props.quiz.desc} </p>
                                    </div>
                                </div>
                            </button >
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxTest;