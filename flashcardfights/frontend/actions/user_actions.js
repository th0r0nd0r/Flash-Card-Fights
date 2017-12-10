import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUser = id => dispatch =>
  APIUtil.fetchUser(id).then(user => {
    dispatch(receiveUser(user));
    // console.log("user:", user);
    return user;
  });

  export const getUsers = filters => dispatch =>
  APIUtil.fetchUsers(filters).then(
    users => dispatch(receiveUsers(users)),
    err => dispatch(receiveErrors(err.responseJSON))
  );