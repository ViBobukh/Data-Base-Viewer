import actionTypes from "../Action/actionTypes";

import CONSTANTS from "../lib/constans";

export const state = {
  changeViewType: "table",
  sortType: CONSTANTS.ID,
  sortSubtype: CONSTANTS.LOW_TO_HIGH,
  language: CONSTANTS.ENG,
  allCustomers: [],
  filterValue: "",
};
export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_VIEW_TYPE:
      return {
        ...state,
        changeViewType: action.viewType,
      };
    case actionTypes.SORT_TYPE:
      return {
        ...state,
        sortType: action.sortType,
      };
    case actionTypes.SORT_SUBTYPE:
      return {
        ...state,
        sortSubtype: action.sortSubtype,
      };
    case actionTypes.FAVOURITE:
      return {
        ...state,
        allCustomers: state.allCustomers.map((customer) => {
          if (action.id === customer.id) {
            return {
              ...customer,
              favourite: !customer.favourite,
            };
          }
          return customer;
        }),
      };
    case actionTypes.LANG:
      return {
        ...state,
        language: action.language,
      };
    case actionTypes.SET_USERS:
      return {
        ...state,
        allCustomers: action.users,
      };
    case actionTypes.CHANGE_VALUE:
      return {
        ...state,
        filterValue: action.filterValue,
      };
    default:
      return state;
  }
}
