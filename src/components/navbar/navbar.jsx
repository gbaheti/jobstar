import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import logo from '../../assets/logo.svg';

import PerksList from '../perksList';
import Button from '../button';

const Navbar = (props) => {
  const { isUserLoggedIn, profile } = props;
  const jobstarPerks = ['Extra money', 'Flexible work', 'Skill up'];

  return (
    <nav className="navbar">
      <div className="navbar__content flex">
        <div className="navbar-brand flex">
          <img className="logo" src={logo} alt="jobstar-logo"/>
          {
            !isUserLoggedIn && <PerksList perks={jobstarPerks} />
          }
        </div>
        {
          isUserLoggedIn && profile ?
            <div className="navbar-profile flex">
              <p className="flex">{profile.name[0]}</p>
            </div> :
            <div className="navbar-link">
              <Button text="for businesses" type="primary" />
            </div>
        }
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.profile.isLoggedIn,
    profile: state.profile.profileData
  };
}

export default connect(mapStateToProps)(Navbar);