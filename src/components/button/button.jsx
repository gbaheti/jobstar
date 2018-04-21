import React from 'react';

import './styles.css';

const Button = (props) => {
  const classes = 'btn ' + (props.type === 'secondary' ? 'btn--secondary ' : 'btn--primary ') + props.className;

  return (
    <button className={classes} onClick={props.clickHandler}>
      {props.text}
      {
        props.icon ? 
          <img className="btn__icn" src={props.icon} alt="" /> : null
      }
    </button>
  );
}

export default Button;