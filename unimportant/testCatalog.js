import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';

class testCatalog extends Component {

    render() {
        return (
            <div id="about" className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h4>Our Quizzes</h4>
                                <div className="line-dec"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <button type="button" id="buttonModal1" data-toggle="modal" data-target="#myModal1">
                                <div className="service-item first-service">
                                    <div className="icon"></div>
                                    <h4> Personality Quiz </h4>
                                    <p> Upon completion of the questionnaire, you will:
                                        <li>
                                            <ul>get a <b>description of your personality type</b></ul>
                                            <ul>Discover <b>careers and occupations</b> most suitable for your personality type</ul>
                                            <ul>See which <b>famous personalities</b> share your type</ul>
                                            <ul><b>know yourself</b> better</ul>
                                        </li>
                                    </p>
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
                                            <div className="container name-search-screen">
                                                <form className="header-form">
                                                    <div className="form-group">
                                                        <div className="input-group mb-3 name-search-form">
                                                            <input type="text" className="form-control" id="quizTitle-input" placeholder="Enter quiz name..:)" required style="display: block; width: 350px" />
                                                            <p>
                                                                <b style="text-align: center; margin-right: 100px"></b>
                                                                <br></br>
                                                                <button type="button" className="btn add-questions"></button>
                                                                <br></br>

                                                                <b style="text-align: center;margin-right: 100px">add ingredients you want?</b>
                                                            </p>
                                                            <input type="text" className="form-control toggle-ingredients-input" id="ingredients-input" placeholder="Enter ingredient/s with comma between!"
                                                                required style="display: block; width: 350px" />
                                                            <div className="container" style="box-sizing: border-box">
                                                                <div className="allergies">
                                                                    <br></br>
                                                                    <b style="color: slateblue">Allergies:</b>
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" name="feature" id="tree-nut-checkbox" value="tree-nut-free" />
                                                                        <label className="form-check-label" for="tree-nut-checkbox">tree-nut-free</label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <input className="form-check-input" type="checkbox" name="feature" id="peanuts-checkbox" value="peanut-free" />
                                                                        <label className="form-check-label" for="peanuts-checkbox">peanut-free</label>
                                                                    </div>

                                                                </div>
                                                                <div className="input-group-append">
                                                                    <button type="button" className="btn btn-primary Get-recipes" style="background-color: mediumpurple">Get recipes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="recipes"></div>
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

export default testCatalog;
