import { combineReducers } from "redux";
import playerReducer from "./reducers/playerReducer";
import appReducer from "./reducers/appReducer";

export default combineReducers({
  app: appReducer,
  player: playerReducer,
});
