import rootred from "./redux/reducers/main";
import { createStore } from "redux";

const store = createStore(
  rootred,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
