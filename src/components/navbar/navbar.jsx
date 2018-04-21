import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import logo from '../../assets/logo.svg';

import PerksList from '../perksList';
import Button from '../button';

const Navbar = (props) => {
  const { isUserLoggedIn } = props;
  const jobstarPerks = ['Extra money', 'Flexible work', 'Skill up'];

  return (
    <nav className="navbar">
      <div className="navbar__content flex">
        <div className="navbar-brand flex">
          <img className="logo" src={logo} alt="jobstar-logo"/>
          {
            !isUserLoggedIn ? 
              <PerksList perks={jobstarPerks}/> : null
          }
        </div>
        <div className="navbar-link">
          <Button text="for businesses" type="primary" />
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.profile.isLoggedIn
  };
}

export default connect(mapStateToProps)(Navbar);