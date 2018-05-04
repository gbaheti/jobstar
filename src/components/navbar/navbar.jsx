import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PerksList from "../perksList";
import Button from "../button";
import Menu from "../menu";

import { logoutUser, toggleSidebar } from "../../actions";
import { isMobile } from "../../utils";

import "./styles.css";
import logo from "../../assets/logo.svg";

class Navbar extends Component {
  state = {
    isMobileDevice: false,
    redirectToBusiness: false,
    jobPerks: ["Extra money", "Flexible work", "Skill up"],
  };

  componentDidMount = () => {
    this.setState({
      isMobileDevice: isMobile(),
    });
  };

  redirect = e => {
    this.setState({ redirectToBusiness: true });
  };

  toggleSidebar = e => {
    console.log("h");
    this.props.toggleSidebar();
  };

  renderNavbarRight = () => {
    const { isUserLoggedIn, profile, onUserLogout } = this.props;

    if (isUserLoggedIn) {
      const initial = profile.first_name ? profile.first_name[0] : "";

      return (
        <div className="navbar-profile flex">
          <p className="flex">{initial}</p>
          <ul className="navbar-profile__menu">
            <li onClick={onUserLogout}>
              Logout &nbsp;
              <span role="img" aria-label="bye">
                👋
              </span>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="navbar-link">
          <Button text="for businesses" type="primary" clickHandler={this.redirect} />
        </div>
      );
    }
  };

  render() {
    if (this.state.redirectToBusiness) {
      return <Redirect push to="/business" />;
    }

    const { isUserLoggedIn, isSidebarOpen } = this.props;
    const { isMobileDevice } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar__content flex">
          {isMobileDevice && <Menu isOpen={isSidebarOpen} onToggle={this.toggleSidebar} />}
          <div className="navbar-brand flex">
            <img
              className="logo"
              src={logo}
              alt="jobstar-logo"
              onClick={() => {
                window.location.href = "/";
              }}
            />
            {!isUserLoggedIn && <PerksList perks={this.state.jobPerks} />}
          </div>
          {this.renderNavbarRight()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSidebarOpen: state.ui.isSidebarOpen,
    isUserLoggedIn: state.user.isLoggedIn,
    profile: state.user.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
    onUserLogout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
