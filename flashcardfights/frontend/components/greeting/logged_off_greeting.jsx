import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  signUpClick(e) {
    e.preventDefault();
    const signup = document.getElementsByClassName("signup-button");
    console.log(signup);
    signup[0].click();
  }

  render() {
    return (
      <div className="splash">
        <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_2245/v1512865824/black-girls-code_tlj07k.jpg"/>
        <h3>Flashcard Fights</h3>
        <h4>Fight against your classmates!</h4>
        <button onClick={this.signUpClick} className="large-signup">Sign Up</button>
      </div>);
  }
}
export default Greeting;
