import * as APIUtil from "../util/challenge_api_util";

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_CHALLENGE = "RECEIVE_CHALLENGE";
export const RECEIVE_CHALLENGE_ERRORS = "RECEIVE_CHALLENGE_ERRORS";

export const receiveChallenges = challenges => ({
  type: RECEIVE_CHALLENGES,
  challenges
});

export const receiveChallenge = challenge => ({
  type: RECEIVE_CHALLENGE,
  challenge
});

export const receiveErrors = errors => ({
  type: RECEIVE_CHALLENGE_ERRORS,
  errors
});

export const getChallenges = filters => dispatch =>
  APIUtil.fetchCHALLENGES(filters).then(
    challenges => dispatch(receiveChallenges(challenges)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getChallenge = id => dispatch =>
  APIUtil.fetchChallenge(id).then(
    challenge => dispatch(receiveChallenge(challenge)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createChallenge = challenge => dispatch =>
  APIUtil.createChallenge(challenge).then(
    newChallenge => {
      dispatch(receiveChallenge(newChallenge));
      if (newChallenge) {
        return newChallenge;
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateChallenge = challenge => dispatch =>
  APIUtil.updateChallenge(challenge)
    .then(updated => dispatch(receiveChallenge(updated)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

export const deleteChallenge = id => dispatch => APIUtil.deleteChallenge(id);
