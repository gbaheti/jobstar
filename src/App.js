import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Main from './components/main/main';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;