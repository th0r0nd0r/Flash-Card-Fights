import { RECEIVE_CHALLENGES, RECEIVE_CHALLENGE, UPDATE_CHALLENGE, DELETE_CHALLENGE } from "../actions/challenge_actions";
import merge from "lodash/merge";

const challengesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CHALLENGES:
      return action.challenges;
    case RECEIVE_CHALLENGE:
      const newChallenge = { [action.challenge.id]: action.challenge };
      return merge({}, newState, newChallenge);
    case UPDATE_CHALLENGE:
      const challenge = { [action.challenge.id]: action.challenge };
      return merge({}, newState, challenge);
    case DELETE_CHALLENGE:
      const deleted = action.challenge;
      delete newState[deleted.id];
      return newState;
    default:
      return state;
  }
};

export default challengesReducer;
