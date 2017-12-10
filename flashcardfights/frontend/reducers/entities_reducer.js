import { combineReducers } from "redux";
import courses from "./courses_reducer";
import quizzes from "./quizzes_reducer";
import subjects from "./subject_reducer";

export default combineReducers({
  courses, quizzes, subjects
});
