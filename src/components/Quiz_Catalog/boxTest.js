import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from "react-router-dom";
import Quiz from '../Quiz/Quiz'

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
                        <button type="button" key={q._id} id="buttonModal1" data-toggle="modal" data-target="#myModal1">
                            <div className="service-item second-service">
                                <div className="icon"></div>
                                <Link to="/quiz">
                                    <div>
                                        <h4> {q.title} </h4>
                                        <p> {q.desc} </p>
                                    </div>
                                </Link>
                            </div>
                        </button >
                    )
                })
            )
        }
    }

    startQuiz = ()=> {
        console.log(this.props.quiz._id)
        return <Quiz  id={this.props.quiz._id}/>
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
                            {/* {this.quizzes()} */}
                            <button type="button" id="buttonModal1" data-toggle="modal" data-target="#myModal1">
                                <div className="service-item second-service">
                                    <div className="icon"></div>
                                    <div onClick={this.startQuiz}>
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

//modal:
{/* <div className="modal fade" id="myModal1" role="dialog">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title" > add a new quiz </h4>
            </div>
            <div className="modal-body">
                <div className="container">
                    <Quiz />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div> */}