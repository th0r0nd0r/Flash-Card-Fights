import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  };
};

export default connect(mapStateToProps, null)(Dashboard);
