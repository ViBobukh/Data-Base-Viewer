import React from "react";
import classnames from "classnames";

import CONSTANTS from "../../../lib/constans";
import "./Sorting.css";
import Button from "../../Button/Button";

export default function SortingSubtype({
  sortSubtype,
  language,
  createSortSubtype,
}) {
  let subtypeLtH = true;
  let subtypeHtL = false;

  if (sortSubtype !== CONSTANTS.LOW_TO_HIGH) {
    subtypeHtL = true;
    subtypeLtH = false;
  }

  return (
    <div className="sorting-subtype">
      <Button
        className={classnames("sorting-low_to_high", { isActive: subtypeLtH })}
        onClick={() => {
          createSortSubtype(CONSTANTS.LOW_TO_HIGH);
        }}
      >
        {language.LOW_TO_HIGH}
      </Button>
      <Button
        className={classnames("sorting-high_to_low", { isActive: subtypeHtL })}
        onClick={() => {
          createSortSubtype(CONSTANTS.HIGH_TO_LOW);
        }}
      >
        {language.HIGH_TO_LOW}
      </Button>
    </div>
  );
}
