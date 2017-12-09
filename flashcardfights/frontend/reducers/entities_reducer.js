import { combineReducers } from "redux";
import courses from "./courses_reducer";
import quizzes from "./quizzes_reducer";

export default combineReducers({
  courses, quizzes,
});
