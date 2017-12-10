import { connect } from "react-redux";
import ChallengeShow from "./challenge_show";
import {
  getChallenge,
  getChallenges,
  updateChallenge,
  deleteChallenge,
  createChallenge
} from "../../actions/challenge_actions";
import { selectChallenge } from "../../reducers/selectors";
import { selectQuiz } from "../../reducers/selectors";


const mapStateToProps = (state, props) => {
  console.log("show container props: ", props);
   const quizId = parseInt(props.match.params.quiz_id);
   const quiz = selectQuiz(state.entities, props.match.params.quiz_id);
  //  const currentUser = state.session.currentUser;
  return {
    quizId: quizId,
    quiz: quiz
    // challenges: state.entities.challenges
    // currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChallenge: id => dispatch(getChallenge(id)),
  updateChallenge: challenge => dispatch(updateChallenge(challenge)),
  deleteChallenge: id => deleteChallenge(id),
  createChallenge: challenge => createChallenge(challenge)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeShow);
