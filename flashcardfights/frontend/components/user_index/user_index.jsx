import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      classmates: {}
    };
  }

  componentDidMount() {
    this.props.getUsers()
      .then(this.setState({ classmates: this.props.classmates }))
  }

  render () {
    console.log("PROPS: ", this.props);
    return(<div></div>);
  }
}

export default UserIndex;