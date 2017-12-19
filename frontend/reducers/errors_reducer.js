import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import challenge from './challenge_errors_reducer';
import user from './user_errors_reducer';
import course from './course_errors_reducer';
import question from './question_errors_reducer';
import quiz from './quiz_errors_reducer';
import subject from './subject_errors_reducer';

export default combineReducers({
  session, 
  challenge, 
  user, 
  course, 
  question,
  quiz,
  subject
});
