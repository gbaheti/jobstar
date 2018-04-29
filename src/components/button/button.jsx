import React from "react";

import "./styles.css";

const Button = props => {
  const classes =
    "btn " +
    (props.type === "secondary" ? "btn--secondary " : "btn--primary ") +
    props.className;
  const clickHandler = props.clickHandler || (() => {});

  return (
    <button
      className={classes}
      onClick={e => {
        e.stopPropagation();
        clickHandler(e);
      }}>
      {props.text}
      {props.icon ? <img className="btn__icn" src={props.icon} alt="" /> : null}
    </button>
  );
};

export default Button;
