import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Components/Header/Header';
import Users from './modules/Users/Users';
import JestSimple from './modules/JestSimple/JestSimple';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Users}/>
            <Route exact path="/jest-simple" component={JestSimple}/>
          </div>
        </Router>
    );
  }
}

export default App;
