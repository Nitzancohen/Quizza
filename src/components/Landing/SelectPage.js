import React, { Component } from 'react';
import '../../css/selectpage.css';

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
                    <hi className="header">TEST YOURSELF</hi><br /><br />
                        <span className="icon"><i className="fas fa-question"></i></span>
                    </div>
                    <div className="app cloud">
                    <hi className="header">CLOUD GAME</hi><br /><br />
                    <span className="icon"><i className="fas fa-cloud"></i></span>
                    </div>
                    <div className="app horoscope">
                    <hi className="header">WHAT YOUR HOROSCOPE?</hi><br /><br />
                    <span className="icon"><i className="far fa-star"></i></span>
                    </div>
                </div>
            </div>);
    }
}

export default SelectPage;
