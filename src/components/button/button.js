import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    const classes = 'btn ' + (this.props.type === 'secondary' ? 'btn--secondary ' : 'btn--primary ') + this.props.className;

    return (
      <button className={classes}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;