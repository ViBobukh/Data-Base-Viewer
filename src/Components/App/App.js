import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";

import "./App.css";
import CartHolderTable from "../CartHolder/CartHolderTable";
import CONSTANTS from "../../lib/constans";
import sortFunc from "../../lib/sortFunc";
import translate from "../../lib/translate";
import {
  createChangeValue,
  createSortType,
  createSortSubtype,
  createChangeAction,
  createLang,
} from "../../Action/actions";
import filter from "../../lib/filter";
import CartHolder from "../CartHolder/CartHolder";
import SortMenu from "../SortMenu/SortMenu";

function App({
  changeViewType,
  sortType,
  sortSubtype,
  allCustomers,
  language,
  createChangeValue,
  filterValue,
  createSortType,
  createSortSubtype,
  createChangeAction,
  createLang,
  history,
}) {
  const users = useMemo(() => {
    let data = sortFunc(sortType, sortSubtype, allCustomers);
    if (filterValue) {
      data = filter(filterValue, data);
    }
    return data;
  }, [sortType, sortSubtype, filterValue, allCustomers]);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("type")) {
      const type = searchParams.get("type");
      if (type) {
        createSortType(type);
      }
    }
    if (searchParams.has("subType")) {
      const subType = searchParams.get("subType");
      if (subType) {
        createSortSubtype(subType);
      }
    }
    if (searchParams.has("view")) {
      const view = searchParams.get("view");
      if (view) {
        createChangeAction(view);
      }
    }
    if (searchParams.has("lang")) {
      const lang = searchParams.get("lang");
      if (lang) {
        createLang(lang);
      }
    }
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams([
      ["type", sortType],
      ["subType", sortSubtype],
      ["view", changeViewType],
      ["lang", language],
    ]);
    history.push({
      pathname: "/",
      search: `?${searchParams.toString()}`,
    });
  }, [sortType, sortSubtype, language, changeViewType]);

  return (
    <>
      <Router>
        <SortMenu
          language={translate(language)}
          changeValue={createChangeValue}
          filterValue={filterValue}
        />
      </Router>
      {changeViewType === CONSTANTS.TABLE ? (
        <CartHolderTable language={translate(language)} allCustomer={users} />
      ) : (
        <CartHolder language={translate(language)} allCustomer={users} />
      )}
    </>
  );
}

const mapStateToProps = ({
  changeViewType,
  sortType,
  sortSubtype,
  allCustomers,
  language,
  filterValue,
}) => ({
  changeViewType,
  sortType,
  sortSubtype,
  allCustomers,
  language,
  filterValue,
});

const mapDispatchToProps = {
  createChangeValue,
  createSortType,
  createSortSubtype,
  createChangeAction,
  createLang,
};
const reduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(reduxApp);
