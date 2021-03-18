import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { state, reducer } from "../Reducers/reducer";
import { getInfo } from "../lib/getInfo";

const store = createStore(reducer, state, applyMiddleware(thunk));

store.dispatch(getInfo());

export default store;
