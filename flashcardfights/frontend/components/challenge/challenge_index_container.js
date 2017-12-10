import { connect } from "react-redux";
import ChallengeIndex from "./challenge_index";
import { getChallenge, getChallenges, updateChallenge, deleteChallenge, createChallenge } from "../../actions/challenge_actions";


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.session.currentUser,
    challenges: state.entities.challenges
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserChallenges: (userId) => dispatch(getChallenges(userId)),
  // updateChallenge: (challenge) => dispatch(updateChallenge(challenge)),
  // deleteChallenge: id => deleteChallenge(id),
  // createChallenge: challenge => createChallenge(challenge)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeIndex);
