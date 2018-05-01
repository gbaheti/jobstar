import React from "react";

import "./styles.css";

const Button = props => {
  const themeClass = props.type === "secondary" ? "btn--secondary " : "btn--primary ";
  const clickHandler = props.clickHandler || (() => {});
  const classes = ["btn", themeClass, props.className].join(" ");

  const handleClick = e => {
    e.stopPropagation();

    clickHandler(e);
  };

  return (
    <button className={classes} onClick={handleClick}>
      {props.text}
      {props.icon ? <img className="btn__icn" src={props.icon} alt="" /> : null}
    </button>
  );
};

export default Button;
