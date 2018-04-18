import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    const classes = 'btn ' + (this.props.type === 'secondary' ? 'btn--secondary ' : 'btn--primary ') + this.props.className;

    return (
      <button className={classes} onClick={this.props.clickHandler}>
        {this.props.text}
        {
          this.props.icon ? 
            <img className="btn__icn" src={this.props.icon} alt="" /> : null
        }
      </button>
    );
  }
}

export default Button;