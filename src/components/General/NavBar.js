import React, { Component } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {

        return (<Router>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">QUIZZA</a>
                    </div>
                    <span class="nav navbar-nav navbar-right">
                        
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