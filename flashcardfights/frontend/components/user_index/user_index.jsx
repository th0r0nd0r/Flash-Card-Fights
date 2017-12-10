import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import User from '../user_show/user_show';

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

  classmateList(classmates = {}) {
    const mates = Object.values(classmates);
    if (mates.length > 0) {
      return mates.map(mate => {
        return(
          <User 
            id={mate.id}
            username={mate.username}
            isEducator={mate.is_educator}
          />
        );
      });
    }
  } 

  render () {
    console.log("PROPS: ", this.props);
    return(
    <div>

    </div>);
  }
}

export default UserIndex;