import { createStore } from "redux";
import { combineReducers } from "redux";

import todoStore from "../modules/todoStore";

const rootReducer = combineReducers({
  todoStore,
});
const store = createStore(rootReducer);

export default store;
