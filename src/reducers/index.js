import userReducer from "./userReducer";
const { default: listReducer } = require("./listReducer");
const { combineReducers } = require("redux");

export default combineReducers({
  listReducer,
  userReducer,
});

//root reducer
