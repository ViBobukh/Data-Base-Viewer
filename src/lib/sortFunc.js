import CONSTANTS from "./constans";

function sortType(type, subtype, users) {
  let result;
  users = [...users];
  if (type === CONSTANTS.ID && subtype === CONSTANTS.LOW_TO_HIGH) {
    result = users.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  } else if (type === CONSTANTS.ID && subtype === CONSTANTS.HIGH_TO_LOW) {
    result = users.sort((a, b) => {
      return a.id < b.id ? 1 : -1;
    });
  } else if (type === CONSTANTS.AGE && subtype === CONSTANTS.LOW_TO_HIGH) {
    result = users.sort((a, b) => {
      return a.age > b.age ? 1 : -1;
    });
  } else if (type === CONSTANTS.AGE && subtype === CONSTANTS.HIGH_TO_LOW) {
    result = users.sort((a, b) => {
      return a.age < b.age ? 1 : -1;
    });
  } else if (type === CONSTANTS.NAME && subtype === CONSTANTS.LOW_TO_HIGH) {
    result = users.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  } else if (type === CONSTANTS.NAME && subtype === CONSTANTS.HIGH_TO_LOW) {
    result = users.sort((a, b) => {
      return a.name < b.name ? 1 : -1;
    });
  }
  return result;
}

export default sortType;
