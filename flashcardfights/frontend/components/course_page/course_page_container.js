import { connect } from 'react-redux';
import CoursePage from './course_page';
import { getCourse } from '../../actions/course_actions';


const mapStateToProps = (state, props) => {
  // console.log("STATE: ", state);
  // console.log("PROPS: ", props);
  return {
    user: state.session.user,
    course: state.entities.courses
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getCourse: (id) => dispatch(getCourse(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
