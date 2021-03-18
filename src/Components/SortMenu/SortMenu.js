import React from "react";
import { connect } from "react-redux";

import ViewType from "./ChangeViewType/ChangeViewType";
import LangButtons from "./LangButtons/LangButtons";
import FilterInput from "./FilterInput/FilterInput";
import {
  createSortSubtype,
  createSortType,
  createChangeAction,
} from "../../Action/actions";
import "./SortMenu.css";
import SortingType from "./Sorting/SortingType";
import SortingSubtype from "./Sorting/SortingSubtype";

function SortMenu({
  changeViewType,
  sortSubtype,
  sortType,
  language,
  createChangeAction,
  changeValue,
  filterValue,
  createSortType,
  createSortSubtype,
}) {
  return (
    <>
      <div className="sort_menu">
        <SortingType
          language={language}
          createSortType={createSortType}
          sortType={sortType}
        />
        <SortingSubtype
          language={language}
          createSortSubtype={createSortSubtype}
          sortSubtype={sortSubtype}
        />
        <FilterInput
          language={language}
          changeValue={changeValue}
          filterValue={filterValue}
        />
        <ViewType
          createChangeAction={createChangeAction}
          changeViewType={changeViewType}
          language={language}
        />
        <LangButtons />
      </div>
    </>
  );
}

const mapStateToProps = ({ sortSubtype, sortType, changeViewType }) => ({
  sortSubtype,
  sortType,
  changeViewType,
});

const mapDispatchToProps = {
  createSortType,
  createSortSubtype,
  createChangeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
