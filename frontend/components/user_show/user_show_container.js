import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

import { createChallenge } from "../../actions/challenge_actions";
import User from "./user_show";

const mapStateToProps = (state, { id, username, isEducator, quizId, closeModal}) => ({
  id, username, isEducator, quizId, closeModal,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createChallenge: challenge => dispatch(createChallenge(challenge))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
