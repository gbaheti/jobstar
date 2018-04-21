import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './styles.css';

import Navbar from '../navbar';
import Main from '../main';
import RegisterFlow from '../registerFlow';
import Footer from '../footer';

const App = (props) => {
  const { isRegistrationModalOpen } = props;

  return (
    <div className="app">
      <Navbar />
      <Main />
      {
        isRegistrationModalOpen && <RegisterFlow />
      }
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isRegistrationModalOpen: state.registration.isOpen
  };
};

export default withRouter(connect(mapStateToProps)(App));