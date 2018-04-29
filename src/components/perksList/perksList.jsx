import React from "react";

import "./styles.css";
import check from "../../assets/icon_check_green.svg";

const PerksList = props => {
  return (
    <ul className="perks">
      {props.perks.map((p, idx) => (
        <li className="perks__item" key={idx}>
          <img src={check} alt="" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
};

export default PerksList;
