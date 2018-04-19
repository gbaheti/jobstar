import React, { Component } from 'react';

import Button from '../button/button';

import './navbar.css';
import logo from '../../assets/logo.svg';
import check from '../../assets/icon_check_green.svg';

/*********************************************************************
 Sub-components
*********************************************************************/

function PerksItem(props) {
  return (
    <li className="perks__item">
      <img src={check} alt="" />
      <span>{props.text}</span>
    </li>
  );
}

/*********************************************************************
 Main component
*********************************************************************/

class Navbar extends Component {
  handleClick = () => {
    this.props.onUserRegister();
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__content flex">
          <div className="navbar-brand flex">
            <img className="logo" src={logo} alt="jobstar-logo"/>
            <ul className="perks">
              <PerksItem text="Extra money" />
              <PerksItem text="Flexible work" />
              <PerksItem text="Skill up" />
            </ul>
          </div>
          <div className="navbar-link">
            <Button text="for businesses" type="primary" clickHandler={this.handleClick} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;