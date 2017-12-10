import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const challenge = {
      challenger_id: this.props.currentUser,
      challengee_id: this.props.id,
      quiz_id: this.props.quizId
    };
    e.preventDefault();
    // console.log("clicked:", this.props.getSpot);
    this.props.createChallenge(challenge);
  }

  render() {
    const { id, username, isEducator } = this.props;

    return(
      <div className="user">
        <h3 className="classmate-name">{username}</h3>
      </div>
    );
  }
}

export default User;