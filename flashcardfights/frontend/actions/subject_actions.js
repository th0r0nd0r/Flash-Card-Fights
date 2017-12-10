import * as APIUtil from "../util/subject_api_util";

export const RECEIVE_SUBJECTS = "RECEIVE_subjectS";
export const RECEIVE_SUBJECT_ERRORS = "RECEIVE_SUBJECT_ERRORS";

export const receiveSubjects = subjects => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const receiveErrors = errors => ({
  type: RECEIVE_SUBJECT_ERRORS,
  errors
});

export const getSubjects = filters => dispatch =>
  APIUtil.fetchSubjects(filters).then(
    courses => dispatch(receiveSubjects(courses)),
    err => dispatch(receiveErrors(err.responseJSON))
  );