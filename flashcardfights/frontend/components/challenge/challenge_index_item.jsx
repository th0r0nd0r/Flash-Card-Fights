import React from "react";
import Users from "../user_index/user_index";
import Modal from "../Modal.jsx";
import { Link, withRouter, Redirect } from 'react-router-dom';

class ChallengeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  // componentDidMount() {
  //   this.props.fetchUserChallenges(this.props.user.id)
  //     .then(response => this.setState({ challenges: Object.values(response.challenges) }));
  // }
  handleClick() {
    
  }

  render() {
    console.log("PROPS: ", this.props);
    console.log("STATE: ", this.state);
    const challenge = this.props.challenge;
    console.log("challenge", challenge);
    const quizUrl = `/quiz/${challenge.quiz.id}`
    return (
      <div className="no-underline">
        <Link to={quizUrl}><div className="challenge-link" onClick={this.handleClick()}>{challenge.challenger.username} challenges you on {challenge.quiz.name}</div></Link>
      </div>
    );
  }
}

export default withRouter(ChallengeIndexItem);
