import { createSetUsers } from "../Action/actions";

const URL = "/public/data.json";

let fetchUrl = (url) => (dispatch) => {
  return fetch(url).then((resp) => {
    resp.json().then((users) => dispatch(createSetUsers(users)));
  });
};

export const getInfo = () => {
  return fetchUrl(URL);
};
