import React, { Component } from 'react';
import NavBar from './components/General/NavBar';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizzesScreen from './components/Quiz_Catalog/QuizzesScreen';
import LandingPage from './components/Landing/LandingPage';
import HomePage from './components/Landing/HomePage';
import CreateQuiz from './components/Create/CreateQuizForm';
import Quiz from './components/Quiz/Quiz';
import './App.css';
import Horoscope from './components/Horoscope/Horoscope';
import Cloud from './components/Cloud/Cloud';

@inject('store')
@observer
class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/quiz" exact render={() => <QuizzesScreen />} />
        <Route path="/create-quiz" exact render={()=> <CreateQuiz />} />
        <Route path="/home" exact render={()=> <HomePage />} />
        <Route path="/horoscope" exact render={()=> <Horoscope />} />
        <Route path="/cloud" exact render={()=> <Cloud />} />
      </div>
    </Router>
    );
  }
}

export default App;
