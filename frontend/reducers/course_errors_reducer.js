import { RECEIVE_COURSE, RECEIVE_COURSE_ERRORS } from "../actions/course_actions";

const CourseErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COURSE_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default CourseErrorsReducer;
