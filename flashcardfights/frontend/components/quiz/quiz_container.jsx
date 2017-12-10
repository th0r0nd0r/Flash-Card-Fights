import {connect} from 'react-redux';
import Quiz from './quiz';
import { getQuiz } from '../../actions/quiz_actions';
import { createQuestionAttempt } from '../../actions/question_attempt_actions';

console.log("get Quiz: ", getQuiz);

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return{
    quiz: state.entities.quizAccoutrements.quizzes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuiz: id => dispatch(getQuiz(id)),
  createQuestionAttempt: question => dispatch(createQuestionAttempt(question))
});

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
