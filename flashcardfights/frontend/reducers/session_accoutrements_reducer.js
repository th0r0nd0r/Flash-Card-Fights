import { combineReducers } from "redux";
import quiz from "./quiz_reducer";
import session from "./session_reducer";

export default combineReducers({
  quiz, session
});
