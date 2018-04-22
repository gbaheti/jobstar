import React from 'react';

import Navbar from '../navbar';
import Main from '../main';
import RegisterFlow from '../registerFlow';
import Footer from '../footer';

import './styles.css';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <RegisterFlow />
      <Footer />
    </div>
  );
}

export default App;