import React from "react";
import UserIndexContainer from "../user_index/user_index_container";
import Modal from 'React-Modal';
import AppModal from "../Modal.jsx";

class ChallengeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: {}
    };
  }

  

  render() {
    console.log("challenge show props: ", this.props);
    return (
      <div className="challenge">
        <h1>CHALLENGE YER MATES</h1>
        <AppModal action={UserIndexContainer} quizId={this.props.quizId} className="challenge-button" />
      </div>
    );
  }
}

export default ChallengeShow;