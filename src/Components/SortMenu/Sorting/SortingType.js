import React from "react";
import classnames from "classnames";

import CONSTANTS from "../../../lib/constans";
import "./Sorting.css";
import Button from "../../Button/Button";

export default function SortingType({ language, createSortType, sortType }) {
  let typeId = true;
  let typeName = false;
  let typeAge = false;

  if (sortType === CONSTANTS.NAME) {
    typeName = true;
    typeId = false;
    typeAge = false;
  } else if (sortType === CONSTANTS.AGE) {
    typeName = false;
    typeId = false;
    typeAge = true;
  }

  return (
    <div className="sorting-type">
      <Button
        className={classnames("sorting-id", { isActive: typeId })}
        onClick={() => {
          createSortType(CONSTANTS.ID);
        }}
      >
        {language.ID}
      </Button>
      <Button
        className={classnames("sorting-name", { isActive: typeName })}
        onClick={() => {
          createSortType(CONSTANTS.NAME);
        }}
      >
        {language.NAME}
      </Button>
      <Button
        className={classnames("sorting-age", { isActive: typeAge })}
        onClick={() => {
          createSortType(CONSTANTS.AGE);
        }}
      >
        {language.AGE}
      </Button>
    </div>
  );
}
