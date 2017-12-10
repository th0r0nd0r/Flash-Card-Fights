import React from "react";
import Users from "../user_index/user_index";
import Modal from "../Modal.jsx";
import ChallengeIndexItem from "./challenge_index_item";

class ChallengeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    };
  }

  componentDidMount() {
    this.props.fetchUserChallenges(this.props.user.id)
      .then(response => this.setState({ challenges: Object.values(response.challenges) }));
  }

  render() {
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    const challenges = this.state.challenges;
    return(
      <div>
        <h1>Active challenges ({ challenges.length })</h1>
        { challenges.map((challenge) => <ChallengeIndexItem challenge={challenge} />)}
      </div>
    );
  }
}

export default ChallengeIndex;
