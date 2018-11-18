import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Quiz from '../Quiz/Quiz';
// import '../../css/tryups/boxesCss.css'
// import '../../css/tryups/boxesCss2.css'

@inject('store')
@observer
class PopUp extends Component {

    render() {
        if (this.props.store.showAddNewPopUp) {
            return (
                <div className="modal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" > add a new quiz </h4>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <p>hello there</p>
                                    <Quiz />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default PopUp;
