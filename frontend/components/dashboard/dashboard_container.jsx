import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { getCourses } from '../../actions/course_actions';
import { getSubjects } from '../../actions/subject_actions';
import { getQuizzes } from '../../actions/quiz_actions';


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.session.user,
    courses: state.entities.courses,
    subjects: state.entities.subjects,
    quizzes: state.entities.quizzes
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(getCourses()),
  getSubjects: () => dispatch(getSubjects()),
  getQuizzes: () => dispatch(getQuizzes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
