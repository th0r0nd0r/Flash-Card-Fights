import {connect} from 'react-redux';
import Quiz from './quiz';
import {getQuiz} from '../../actions/quiz_actions';

console.log("get Quiz: ", getQuiz);

const mapStateToProps = (state, ownProps) => ({
  quiz: state.entities.quizzes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuiz: id => dispatch(getQuiz(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
