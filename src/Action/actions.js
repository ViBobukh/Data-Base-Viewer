import actionTypes from "./actionTypes";

export function createChangeAction(viewType) {
  return {
    type: actionTypes.CHANGE_VIEW_TYPE,
    viewType,
  };
}

export function createSortType(sortType) {
  return {
    type: actionTypes.SORT_TYPE,
    sortType,
  };
}

export function createSortSubtype(sortSubtype) {
  return {
    type: actionTypes.SORT_SUBTYPE,
    sortSubtype,
  };
}

export function createFavourite(boolean, id) {
  return {
    type: actionTypes.FAVOURITE,
    boolean,
    id,
  };
}

export function createLang(language) {
  return {
    type: actionTypes.LANG,
    language,
  };
}

export function createSetUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    users,
  };
}

export function createChangeValue(filterValue) {
  return {
    type: actionTypes.CHANGE_VALUE,
    filterValue,
  };
}
