import React, { Component } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {

        return (<Router>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        QUIZZA
                    </div>
                    <span className="leftnavbar">
                            <Link to="./Quiz_Catalog/QuizzesScreen"> <span>Home</span></Link>
                            <Link to="./Landing/LandingPage"><span> Login</span></Link>
                    </span>
                </div>
            </nav>
            </Router>
        )
    }
}

export default NavBar;
