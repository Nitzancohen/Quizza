import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/nav-bar.css';

class NavBar extends Component {
    render() {

        return (
            <nav className="allnavbar">
                <div className="logo">
                    <span className="leftnavbar">
                        QUIZZA
                    </span>
                    <span className="rightnavbar">
                            <Link to="/home" className='navLinks'><i className="fas fa-home"></i><span> Home </span></Link>
                            <Link to="/" className='navLinks'><i className="fas fa-sign-in-alt"></i><span> Login </span></Link>
                    </span>
                </div>
            </nav>
        )
    }
}

export default NavBar;
