import { connect } from 'react-redux';
import UserIndex from './user_index';
import { getUsers } from '../../actions/user_actions';


const mapStateToProps = (state, props) => {
  console.log("STATE: ", state);
  console.log("PROPS: ", props);
  return {
    user: state.session.user,
    classmates: state.entities.users
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
