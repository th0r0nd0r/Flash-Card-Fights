import { combineReducers } from "redux";
import courses from "./courses_reducer";
import quizAccoutrements from "./quizzes_reducer";

export default combineReducers({
  courses, quizAccoutrements,
});
