import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const requireLogin = ({ component: Component, path, loggedIn }) => {
  return (<Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )
  )} />);
};

const LoggedIn = ({ component: Component, path, loggedIn }) => {
  return (<Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/dashboard" />
      )
  )} />);
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

export const RequireLoginRoute =
  withRouter(connect(mapStateToProps, null)(requireLogin));

export const LoggedinRoute =
  withRouter(connect(mapStateToProps, null)(LoggedIn));
