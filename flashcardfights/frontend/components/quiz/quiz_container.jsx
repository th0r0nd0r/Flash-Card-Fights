import {connect} from 'react-redux';
import Quiz from './quiz';
import getQuiz from '../actions/quiz_actions';

const mapStateToProps = (state, ownProps) => ({
  quiz: state.entities.quiz
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getQuiz: id => dispatch(getQuiz(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
