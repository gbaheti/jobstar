import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
// import Footer from './components/footer/footer';
import RegisterFlow from './components/registerFlow/registerFlow';

import './App.css';

class App extends Component {
  state = {
    showRegisteration: false
  }

  onUserRegister = () => {
    this.setState({
      showRegisteration: true
    });
  }

  exitRegistration = () => {
    this.setState({
      showRegisteration: false
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar onUserRegister={this.onUserRegister} />
          <Main />
          {/* <Footer /> */}
          {
            this.state.showRegisteration ?
              <RegisterFlow onExit={this.exitRegistration} /> 
            : null
          }
        </div>
      </Router>
    );
  }
}

export default App;