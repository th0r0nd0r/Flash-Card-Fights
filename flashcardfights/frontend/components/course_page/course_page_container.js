import { connect } from 'react-redux';
import CoursePage from './course_page';
import { getQuizzes } from '../../actions/quiz_actions';


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.session.user,
    quizzes: state.entities.quizzes
  };
};

const mapDispatchToProps = (dispatch) => ({
  getQuizzes: () => dispatch(getQuizzes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
