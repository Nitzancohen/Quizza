import React, { Component } from 'react';
import '../../css/Homepage.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {

    render() {
        return (
            <div className="container">
                <h1>QUIZZA</h1>
                <p className="opening">Welcome to Quizza, Are you ready to start the fun? <br />
                    You have tree options in fornt of you.. you just need to choose one and start playing!!
             </p>
                <div className="apps">
                    <Link to="/quiz"><div className="app quiz">
                        <h2 className="header">TEST YOURSELF</h2><br />
                        <span className="icon"><i className="fas fa-question"></i></span>
                        <div className="describe">Join us, and get to know yourself better! 
                            Also you can creat any quiz on your mind!</div>
                    </div></Link>
                    <Link to="/cloud"><div className="app cloud">
                        <h2 className="header">CLOUD GAME</h2><br />
                        <span className="icon"><i className="fas fa-cloud"></i></span>
                        <div className="describe">Pick your quote for today by our game!</div>
                    </div></Link>
                    <Link to="/horoscope"><div className="app horoscope">
                        <h2 className="header">WHAT YOUR HOROSCOPE?</h2><br />
                        <span className="icon"><i className="far fa-star"></i></span>
                        <div className="describe">What about your luck today? You will never know but we can give you some idea.</div>
                    </div></Link>
                </div>
            </div>);
    }
}

export default HomePage;
