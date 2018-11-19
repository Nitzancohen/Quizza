import React, { Component } from 'react';
import '../../css/selectpage.css';
import { Link } from 'react-router-dom';

class SelectPage extends Component {

    render() {
        return (
            <div className="container">
                <h1>QUIZZA</h1>
                <p className="opening">Welcome to Quizza, Are you ready to start the fun? <br />
                    You have tree options in fornt of you.. you just need to choose one and start playing!!
             </p>
                <div className="apps">
                    <div className="app quiz">
                    <h2 className="header">TEST YOURSELF</h2><br />
                        <span className="icon"><i className="fas fa-question"></i></span>
                    </div>
                    <div className="app cloud">
                    <h2 className="header">CLOUD GAME</h2><br />
                    <span className="icon"><i className="fas fa-cloud"></i></span>
                    </div>
                    <Link to="/horoscope"><div className="app horoscope">
                    <h2 className="header">WHAT YOUR HOROSCOPE?</h2><br />
                    <span className="icon"><i className="far fa-star"></i></span>
                    </div></Link>
                </div>
            </div>);
    }
}

export default SelectPage;
