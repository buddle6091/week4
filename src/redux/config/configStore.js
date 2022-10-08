import { createStore } from "redux";
import { combineReducers } from "redux";

import todoStore from "../modules/todoStore";

const rootReducer = combineReducers({
  todoStore: todoStore,
});
const store = createStore(todoStore);

export default store;
