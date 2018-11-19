import React, { Component } from 'react';
import '../../css/landing.css';
import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router';


@inject('store')
@observer
class LandingPage extends Component {
    @observable userName = '';
    @observable redirect = false;

    @action inputChange = (e) => this.userName = e.target.value;

    login = async () => {
        if (this.userName) {
            await this.props.store.addUser(this.userName)
            this.redirect = true;
        }
    }

    render() {
        if (this.redirect) {
            return <Redirect push to="/selectpage" />;
        }
        return (
            <div className="container">
                <h1>QUIZZA</h1>
                <span className="input">
                    <span className="username"> Username:</span> <input className="input-username" type="text" name="userName" onChange={this.inputChange} value={this.userName} placeholder='Username' />
                    <br />
                    <input className="LoginButton" type="button" onClick={this.login} value="Login" />
                    <span></span>
                </span>
            </div>
        );
    }
}

export default LandingPage;
