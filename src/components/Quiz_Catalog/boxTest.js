import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Quiz from '../Quiz/Quiz'

@inject('store')
@observer
class boxTest extends Component {

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
                            <button type="button" id="buttonModal1" data-toggle="modal" data-target="#myModal1">
                                <div className="service-item second-service">
                                    <div className="icon"></div>
                                    <h4> {this.props.quiz.title} </h4>
                                    <p> {this.props.quiz.desc} </p>
                                </div>
                            </button>

                            <div className="modal fade" id="myModal1" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title" style="font-size: 24px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: purple"> add a new quiz </h4>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container">
                                                <p>hello there</p>
                                                <Quiz />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal" style=" background-color: khaki">Close</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default boxTest;