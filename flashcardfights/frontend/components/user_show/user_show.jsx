import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("user show props: ", this.props);
    const challenge = { challenge: 
      {
        challenger_id: this.props.currentUser.id,
        challengee_id: this.props.id,
        quiz_id: this.props.quizId
      }
    };
    e.preventDefault();
    // console.log("clicked:", this.props.getSpot);
    this.props.createChallenge(challenge);
    this.props.closeModal();
  }

  render() {
    const { id, username, isEducator } = this.props;

    return(
      <div className="user">
        <h3 onClick={this.handleClick} className="classmate-name">{username}</h3>
      </div>
    );
  }
}

export default User;