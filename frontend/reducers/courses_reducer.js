import { RECEIVE_COURSE, RECEIVE_COURSES } from "../actions/course_actions";
import merge from "lodash/merge";

const coursesReducer = (state = {}, action) => {
  Object.freeze(state);
  // let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COURSES:
      return action.courses;
    case RECEIVE_COURSE:
      const newState = { [action.course.id]: action.course };
      return newState;
    default:
      return state;
  }
};

export default coursesReducer;
