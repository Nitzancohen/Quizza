import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../../css/tryups/boxesCss2.css'
import '../../css/tryups/boxesCss.css'
var Modal = require('react-bootstrap-modal');

@inject('store')
@observer
class ModalExample extends Component {

    // modal = () => {
    //     let modalActions = this.props.store.open
    // }

    // let closeModal = () => modalActions({ open: false })

    // let saveAndClose = () => {
    //     // api.saveData()
    //     //     .then(() => 
    //     this.setState({ open: false });
    // }

    render() {

        return (
            <div>
                <button type='button' onClick={this.props.store.modalAction}> Launch modal </button>
                <Modal
                    show={this.props.store.open}
                    onHide={this.props.store.modalAction}
                    aria-labelledby="ModalHeader">

                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'> A Title Goes here </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Some Content here</p>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* // If you don't have anything fancy to do you can use
                        // the convenient `Dismiss` component, it will
                        // trigger `onHide` when clicked */}
                        <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>

                        {/* // Or you can create your own dismiss buttons */}
                        <button className='btn btn-primary' onClick={this.props.store.modalAction}>
                            Save
                        </button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

export default ModalExample;
