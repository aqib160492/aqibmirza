import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

const configureStore = (state = { rotating: true, toggle: false, current: 0, togglemenu: "" }) => {
  return createStore(rotateReducer,state);
}

export default configureStore;