import React, { Component } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import '../../css/nav-bar.css';

class NavBar extends Component {
    render() {

        return (<Router>
            <nav className="allnavbar">
                <div className="container">
                    <span className="rightnavbar">
                        QUIZZA
                    </span>
                    <span className="leftnavbar">
                            <Link to="/home" className='decoretion'> <span>Home</span></Link>
                            <Link to="/login" className='decoretion'><span> Login</span></Link>
                    </span>
                </div>
            </nav>
            </Router>
        )
    }
}

export default NavBar;
