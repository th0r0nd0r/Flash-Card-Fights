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

    this.classmateList = this.classmateList.bind(this);
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
          <link to="/">
          <User 
            id={mate.id}
            username={mate.username}
            isEducator={mate.is_educator}
          />
          </link>
        );
      });
    }
  } 

  render () {
    console.log("PROPS: ", this.props);
    return(
    <div className="user-index">
      <div className="users">
        {this.classmateList()}
      </div>
    </div>);
  }
}

export default UserIndex;