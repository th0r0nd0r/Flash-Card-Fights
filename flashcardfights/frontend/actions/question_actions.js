import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_questionS";
export const RECEIVE_QUESTION = "RECEIVE_question";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_question_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const receivequestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const receiveErrors = errors => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const patchReview = review => ({
  type: UPDATE_REVIEW,
  review
});

export const destroyReview = review => ({
  type: DELETE_REVIEW,
  review
});

export const getQuestions = filters => dispatch =>
  APIUtil.fetchQuestions(filters).then(
    questions => dispatch(receivequestions(questions)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getQuestion = id => dispatch =>
  APIUtil.fetchQuestion(id).then(
    question => dispatch(receiveQuestion(question)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createQuestion = question => dispatch =>
  APIUtil.createQuestion(question).then(
    newQuestion => {
      dispatch(receiveQuestion(newQuestion));
      if (newQuestion) {
        return newQuestion;
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateQuestion = question => dispatch =>
  APIUtil.updateQuestion(question)
    .then(updated => dispatch(receiveQuestion(updated)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

export const deleteQuestion = id => dispatch => APIUtil.deletequestion(id);
