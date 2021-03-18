import React from "react";
import classnames from "classnames";

import "./ChangeViewType.css";
import CONSTANTS from "../../../lib/constans";
import Button from "../../Button/Button";

function ViewType({ createChangeAction, language, changeViewType }) {
  let tableView = true;
  let preView = false;

  if (changeViewType !== CONSTANTS.TABLE) {
    preView = true;
    tableView = false;
  }

  return (
    <div className="change_view-type">
      <Button
        onClick={() => {
          createChangeAction(CONSTANTS.TABLE);
        }}
        className={classnames("change_view_type-tableView", {
          isActive: tableView,
        })}
      >
        {language.TABLE}
      </Button>
      <Button
        onClick={() => {
          createChangeAction(CONSTANTS.PREVIEW);
        }}
        className={classnames("change_view_type-preview", {
          isActive: preView,
        })}
      >
        {language.PREVIEW}
      </Button>
    </div>
  );
}

export default ViewType;
