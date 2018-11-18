import React, { Component } from 'react';
import '../../css/landing.css';
import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('store')
@observer
class LandingPage extends Component {
    @observable userName = '';

    @action inputChange = (e) => this.userName = e.target.value;

    login = () => {
        this.props.store.addUser(this.userName)
        this.userName = ''
    }

    render() {
        return (
            <div className="container">
                <h1>QUIZZA</h1>
                <span className="input">
                    <span className="username"> Username:</span> <input className="input-username" type="text" name="userName" onChange={this.inputChange} value={this.userName} placeholder='Username' />
                    <br />
                    <Link to="/selectpage"><input className="LoginButton" type="button" onClick={this.login} value="Login" /></Link>
                    <span></span>
                </span>
            </div>);
    }
}

export default LandingPage;
