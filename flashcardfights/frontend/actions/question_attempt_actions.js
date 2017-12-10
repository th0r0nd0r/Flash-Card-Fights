import * as APIUtil from "../util/QuestionAttempt_api_util";

export const RECEIVE_QUESTION_ATTEMPTS = "RECEIVE_QUESTION_ATTEMPTS";
export const RECEIVE_QUESTION_ATTEMPT = "RECEIVE_QUESTION_ATTEMPT";
export const RECEIVE_QUESTION_ATTEMPT_ERRORS = "RECEIVE_QUESTION_ATTEMPT_ERRORS";

export const receiveQuestionAttempts = questionAttempts => ({
  type: RECEIVE_QUESTION_ATTEMPTS,
  questionAttempts
});

export const receiveQuestionAttempt = questionAttempt => ({
  type: RECEIVE_QUESTION_ATTEMPT,
  questionAttempt
});

export const receiveErrors = errors => ({
  type: RECEIVE_QUESTION_ATTEMPT_ERRORS,
  errors
});

export const getQuestionAttempts = filters => dispatch =>
  APIUtil.fetchQuestionAttempts(filters).then(
    questions => dispatch(receiveQuestionAttempts(questions)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getQuestionAttempt = id => dispatch =>
  APIUtil.fetchQuestionAttempt(id).then(
    question => dispatch(receiveQuestionAttempt(question)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createQuestionAttempt = question => dispatch =>
  APIUtil.createQuestionAttempt(question).then(
    newQuestion => {
      dispatch(receiveQuestionAttempt(newQuestion));
      if (newQuestion) {
        return newQuestion;
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateQuestionAttempt = question => dispatch =>
  APIUtil.updateQuestionAttempt(question)
    .then(updated => dispatch(receiveQuestionAttempt(updated)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

export const deleteQuestionAttempt = id => dispatch => APIUtil.deletequestionAttempt(id);
