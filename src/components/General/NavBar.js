import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import '../../css/nav-bar.css';

class NavBar extends Component {
    render() {

        return (
            <nav className="allnavbar">
                <div className="container">
                    <span className="rightnavbar">
                        QUIZZA
                    </span>
                    <span className="leftnavbar">
                            <Link to="/home" className='decoretion'><i class="fas fa-home"></i><span> Home </span></Link>
                            <Link to="/login" className='decoretion'><i class="fas fa-sign-in-alt"></i><span> Login </span></Link>
                    </span>
                </div>
            </nav>
        )
    }
}

export default NavBar;
