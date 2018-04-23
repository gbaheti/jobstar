import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

import PerksList from '../perksList';
import Button from '../button';

class Navbar extends Component {
  state = {
    redirectToBusiness: false
  }

  onClick = (e) => {
    this.setState({redirectToBusiness: true});
  }

  render() {
    const { isUserLoggedIn, profile } = this.props;
    const jobstarPerks = ['Extra money', 'Flexible work', 'Skill up'];

    if(this.state.redirectToBusiness) {
      return <Redirect push to="/business" />
    }

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
            isUserLoggedIn && profile && profile.first_name ?
              <div className="navbar-profile flex">
                <p className="flex">{profile.first_name[0]}</p>
              </div> :
              <div className="navbar-link">
                <Button text="post a job" type="primary" clickHandler={this.onClick}/>
              </div>
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.user.isLoggedIn,
    profile: state.user.profile
  };
}

export default connect(mapStateToProps)(Navbar);