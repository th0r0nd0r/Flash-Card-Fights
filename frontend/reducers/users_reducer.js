import {
  RECEIVE_USER,
  RECEIVE_USERS
} from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      const newUser = action.user || null;
      if (newUser === null) {
        return oldState;
      } else {
        const newState = {};
        newState[newUser.username] = newUser;
        return newState;
      }
    default:
      return oldState;
  }
};

export default UsersReducer;
