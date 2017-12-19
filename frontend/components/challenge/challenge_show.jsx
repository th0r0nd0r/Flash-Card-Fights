import React from "react";
import UserIndexContainer from "../user_index/user_index_container";
import Modal from 'react-modal';
import ChallengeModal from "./ChallengeModal.jsx";
import Link from 'react-router-dom';

class ChallengeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: {}
    };

    this.linkRoute = this.linkRoute.bind(this);
  }

  linkRoute() {
    return this.props.quizId;
  }

  render() {
    console.log("challenge show props: ", this.props);
    return (
      <div className="challenge">
        <h1>CHALLENGE YER MATES</h1>
        <ChallengeModal action={UserIndexContainer} quizId={this.props.quizId} className="challenge-button" />
        <a href={`#/quiz/${this.props.quizId}`}>Start Quiz!</a>
      </div>
    );
  }
}

export default ChallengeShow;