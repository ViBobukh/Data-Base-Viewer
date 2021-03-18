import React from "react";

import "./FilterInput.css";

function FilterInput({ changeValue, filterValue, language }) {
  return (
    <div className="filter_input">
      <input
        type={"text"}
        onChange={(event) => changeValue(event.target.value)}
        value={filterValue}
        placeholder={language.SEARCH}
      />
    </div>
  );
}

export default FilterInput;
