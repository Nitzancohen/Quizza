import React, { Component } from 'react';
import './App.css';
import NavBar from './components/General/NavBar';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizzesScreen from './components/Quiz_Catalog/QuizzesScreen';
import LandingPage from './components/Landing/LandingPage';
import CreateQuiz from './components/Create/CreateQuizForm'; 

@inject('store')
@observer
class App extends Component {
  
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/home" exact render={() => <QuizzesScreen />} />
        <Route path="/login" exact render={() => <LandingPage />} />
        <Route path="/create-quiz" exact render={()=> <CreateQuiz />} /> // <--- temporary!!!
      </div>
    </Router>
    );
  }
}

export default App;
