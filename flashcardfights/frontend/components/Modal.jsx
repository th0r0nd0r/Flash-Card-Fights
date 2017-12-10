import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignInFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserIndexContainer from './user_index/user_index_container';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    overflow: 'none',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    width: '30%',
    height: '50%',
    'borderRadius': '5px'
  }
};

class AppModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let text;
    let classN;
    let user;
    if (this.props.demo) {
      text = "Demo Log In";
      classN = "demo-login-button";
      user = { username: "demo", password: "password" };
    }
    else if (this.props.action === SignInFormContainer) {
      text = "Log In";
      classN = "login-button";
      user = { username: "", password: "" };
    } else if (this.props.action === SignupFormContainer) {
      text = "Sign Up";
      classN = "signup-button";
      user = { username: "", password: "" };
    } else if (this.props.action === UserIndexContainer) {
      text = "Challenge a Friend";
      classN = "challenge-button";
    }
    console.log("modal props: ", this.props)
    return (
      <div>
        <a onClick={this.openModal} className={classN}>{text}</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          quizId={this.props.quizId || {}}
        >

          <this.props.action closeModal={this.closeModal} text={text} quizId={this.props.quizId} closeModal={this.closeModal} user={user} />
        </Modal>
      </div>
    );
  }
}

export default AppModal;
