import { RECEIVE_SUBJECTS } from "../actions/subject_actions";
import merge from "lodash/merge";

const subjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SUBJECTS:
      return action.subjects;
    default:
      return state;
  }
};

export default subjectsReducer;
