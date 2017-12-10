import React from 'react';
import { Provider } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { RequireLoginRoute, LoggedinRoute } from '../util/authorization_util';
import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import GreetingContainer from './greeting/greeting_container';
import DashboardContainer from './dashboard/dashboard_container';
import QuizContainer from './quiz/quiz_container';



const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <RequireLoginRoute exact path="/" component={GreetingContainer} />
        <RequireLoginRoute path="/login" component={SessionFormContainer} />
        <RequireLoginRoute path="/signup" component={SessionFormContainer} />
        <LoggedinRoute path="/dashboard" component={DashboardContainer} />
        <LoggedinRoute path="/quiz/:quiz_id" component={QuizContainer} />
      </Switch>
    </div>
  );
};

export default App;
