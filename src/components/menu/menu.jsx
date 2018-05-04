import React from "react";

import "./styles.css";

const Menu = props => {
  const { isOpen, onToggle } = props;

  return (
    <div className={"menu" + (isOpen ? " menu--open" : "")} onClick={onToggle}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default Menu;
