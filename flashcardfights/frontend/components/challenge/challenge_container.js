import { connect } from "react-redux";
import Challenge from "./quiz";
import { getChallenge } from "../../actions/challenge_actions";


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    challenge: state.entities.challenge
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChallenge: id => dispatch(getChallenge(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
