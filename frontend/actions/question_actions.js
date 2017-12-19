import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";

export const receiveQuestions = questions => ({
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


export const getQuestions = filters => dispatch =>
  APIUtil.fetchQuestions(filters).then(
    questions => dispatch(receiveQuestions(questions)),
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
