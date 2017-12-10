import { combineReducers } from "redux";
import courses from "./courses_reducer";
<<<<<<< HEAD
import quizAccoutrements from "./quizzes_reducer";

export default combineReducers({
  courses, quizAccoutrements,
=======
import quizzes from "./quizzes_reducer";
import subjects from "./subject_reducer";

export default combineReducers({
  courses, quizzes, subjects
>>>>>>> a88df945ec554cd0413ae68d052bcadc800d3a47
});
