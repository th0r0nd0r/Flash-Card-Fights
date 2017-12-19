import { RECEIVE_SUBJECT_ERRORS } from "../actions/subject_actions";

const SubjectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SUBJECT_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default SubjectErrorsReducer;
