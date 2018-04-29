import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

import "./styles.css";

const Filter = () => {
  return (
    <div className="filter">
      <Select name="role" placeholder="Role: All" disabled={true} />
      <Select name="location" placeholder="Location: Delhi" disabled={true} />
      <Select name="recent" placeholder="Recent" disabled={true} />
    </div>
  );
};

export default Filter;
