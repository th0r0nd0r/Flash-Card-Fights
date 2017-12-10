import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { getCourses } from '../../actions/course_actions';


const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    courses: state.entities.courses
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCourses: () => dispatch(getCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
